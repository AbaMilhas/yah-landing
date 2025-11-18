import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const html = `
      <h2>Novo contato — Yah Milhas</h2>
      <p><b>Nome:</b> ${data.nome}</p>
      <p><b>WhatsApp:</b> ${data.whats}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Origem:</b> ${data.origem || "form"}</p>
      <p><b>Criado em:</b> ${new Date(data.criadoEm).toLocaleString("pt-BR")}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Yah Milhas" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: "Novo contato — Yah Milhas",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e?.message ?? "erro" }, { status: 500 });
  }
}
