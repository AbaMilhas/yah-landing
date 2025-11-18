// app/api/cotacao/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

// ===== Config =====
const SHEETS_ID = process.env.GOOGLE_SHEETS_ID!;
const SERVICE_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
const PRIVATE_KEY_RAW = process.env.GOOGLE_PRIVATE_KEY || "";

// Nome da aba (guia) da planilha. Ajuste se sua guia não for "Sheet1"
const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB || "Sheet1";

// Escopo: acesso a planilhas
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getSheetsClient() {
  if (!SHEETS_ID || !SERVICE_EMAIL || !PRIVATE_KEY_RAW) {
    throw new Error("Variáveis de ambiente ausentes para Google Sheets.");
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

  return google.sheets({ version: "v4", auth: jwt });
}

// Pequena ajudinha p/ valor estimado (exemplo simples)
function estimarValor(cia: string, pontos: number) {
  // Tabela de CPM (R$ por 1.000 pts) – ajuste depois
  const cpm: Record<string, number> = {
    Latam: 28,
    Smiles: 21,
    Azul: 17,
    TAP: 31,
    "American Airlines": 57,
    Iberia: 36,
    Qatar: 57,
    British: 42,
    Livelo: 35,
    Esfera: 34,
    "C6 Bank": 32,
    Itau: 33,
    Outros: 30,
  };
  const valorMilheiro = cpm[cia] ?? 30;
  return (pontos / 1000) * valorMilheiro;
}

// Um GET para testar se a rota está viva
export async function GET() {
  try {
    const sheets = getSheetsClient();
    // só tenta ler o título da planilha (sanity check)
    const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEETS_ID });
    const title = meta.data.properties?.title ?? "sem título";
    return NextResponse.json({ ok: true, sheet: title });
  } catch (err: any) {
    console.error("GET /api/cotacao erro:", err?.message || err);
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 });
  }
}

// Recebe os dados do formulário e grava na planilha
export async function POST(req: Request) {
  try {
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
    const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const row = [timestamp, cia, nPontos, valor, nome, whats, email, ip, ua];

    // Grava na planilha
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEETS_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    // Retorna para o front
    return NextResponse.json({ ok: true, valor });
  } catch (err: any) {
    console.error("POST /api/cotacao erro:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}
