export function formatPrice(n: number, plus = true): string {
  const s = new Intl.NumberFormat("tr-TR").format(n);
  return plus ? `₺${s}'den` : `₺${s}`;
}

export function formatDuration(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} dk`;
  if (m === 0) return `${h} sa`;
  return `${h} sa ${m} dk`;
}
