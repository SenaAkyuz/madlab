// Demo: gerçek rezervasyon yok. Form verisi sadece sunucu konsoluna yazılır.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false }, { status: 400 });
  }
  console.log("[demo] randevu talebi:", body);
  return Response.json({ ok: true });
}
