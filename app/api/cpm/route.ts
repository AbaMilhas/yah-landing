export const revalidate = 300;

function parseCSV(csv: string) {
  const lines = csv.trim().split(/\r?\n/);
  return lines.map((line) =>
    line.split(",").map((v) => v.replace(/^"|"$/g, "").trim())
  );
}

export async function GET() {
  const url = process.env.CPM_SHEET_CSV_URL;

  if (!url) {
    return new Response(
      JSON.stringify({ error: "CPM_SHEET_CSV_URL não configurada" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: "Falha ao buscar CSV da planilha" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const csv = await res.text();
  const rows = parseCSV(csv);

  const start = rows[0]?.[0]?.toLowerCase() === "cia" ? 1 : 0;

  const map: Record<string, number> = {};
  for (let i = start; i < rows.length; i++) {
    const cia = rows[i]?.[0];
    const cpmRaw = rows[i]?.[1];
    if (!cia || !cpmRaw) continue;

    const cpm = Number(String(cpmRaw).replace(".", "").replace(",", "."));
    if (!Number.isNaN(cpm)) map[cia] = cpm;
  }

  return new Response(JSON.stringify(map), {
    headers: { "Content-Type": "application/json" },
  });
}