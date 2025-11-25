// app/api/cotacao/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

// garante que rode em Node, não edge
export const runtime = "nodejs";

// Escopo: acesso a planilhas
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// ==== helper: cria cliente do Google Sheets lendo as ENVs na HORA ==== //
function getSheetsClient() {
  const SHEETS_ID = process.env.GOOGLE_SHEETS_ID;
  const SERVICE_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const PRIVATE_KEY_RAW = process.env.GOOGLE_PRIVATE_KEY || "";

  if (!SHEETS_ID || !SERVICE_EMAIL || !PRIVATE_KEY_RAW) {
    throw new Error(
      "Variáveis de ambiente ausentes para Google Sheets. " +
        JSON.stringify({
          hasId: !!SHEETS_ID,
          hasEmail: !!SERVICE_EMAIL,
          hasKey: !!PRIVATE_KEY_RAW,
        })
    );
  }

  // Suporta chave com \n ou colada "crua"
  const key = PRIVATE_KEY_RAW.includes("\\n")
    ? PRIVATE_KEY_RAW.replace(/\\n/g, "\n")
    : PRIVATE_KEY_RAW;

  const jwt = new google.auth.JWT({
    email: SERVICE_EMAIL,
    key,
    scopes: SCOPES,
  });

  return { sheets: google.sheets({ version: "v4", auth: jwt }), SHEETS_ID };
}

// ==== cálculo de valor estimado com SEUS CPMs ==== //
function estimarValor(cia: string, pontos: number) {
  // Tabela de CPM (R$ por 1.000 pts) – seus valores
  const cpm: Record<string, number> = {
    Latam: 22.0,
    Smiles: 14.0,
    Azul: 10.0,
    TAP: 37.0,
    "American Airlines": 70.0,
    Iberia: 45.0,
    Qatar: 50.0,
    British: 50.0,
    Livelo: 25.0,
    Esfera: 25.0,
    "C6 Bank": 35.0,
    Itau: 35.0,
    Outros: 30.0,
  };

  const valorMilheiro = cpm[cia] ?? cpm["Outros"];
  return (pontos / 1000) * valorMilheiro;
}

// ==== GET /api/cotacao – só pra teste/diagnóstico ==== //
export async function GET() {
  try {
    const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB || "Sheet1";

    const hasId = !!process.env.GOOGLE_SHEETS_ID;
    const hasEmail = !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const hasKey = !!process.env.GOOGLE_PRIVATE_KEY;

    if (!hasId || !hasEmail || !hasKey) {
      return NextResponse.json(
        {
          ok: false,
          error: "ENV_MISSING",
          hasId,
          hasEmail,
          hasKey,
          sheetTab: SHEET_TAB,
        },
        { status: 500 }
      );
    }

    const { sheets, SHEETS_ID } = getSheetsClient();
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEETS_ID });
    const title = meta.data.properties?.title ?? "sem título";

    return NextResponse.json({
      ok: true,
      sheet: title,
      sheetTab: SHEET_TAB,
    });
  } catch (err: any) {
    console.error("GET /api/cotacao erro:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}

// ==== POST /api/cotacao – grava na planilha ==== //
export async function POST(req: Request) {
  try {
    const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB || "Sheet1";

    const body = await req.json().catch(() => ({} as any));
    const {
      cia = "",
      pontos = "",
      nome = "",
      whats = "",
      email = "",
    } = body as {
      cia: string;
      pontos: string | number;
      nome: string;
      whats: string;
      email: string;
    };

    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "";
    const ua = req.headers.get("user-agent") || "";

    const nPontos = Number(pontos || 0);
    const valor = isNaN(nPontos) ? 0 : estimarValor(cia, nPontos);

    // Monta a linha
    const timestamp = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
    const row = [timestamp, cia, nPontos, valor, nome, whats, email, ip, ua];

    // Grava na planilha
    const { sheets, SHEETS_ID } = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEETS_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true, valor });
  } catch (err: any) {
    console.error("POST /api/cotacao erro:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}
