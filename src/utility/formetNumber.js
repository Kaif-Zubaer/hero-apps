export function formatNumber(n) {
  if (n >= 1_000_000_000) {
    return Math.floor(n / 1_000_000_000) + 'B';
  }
  if (n >= 1_000_000) {
    return Math.floor(n / 1_000_000) + 'M';
  }
  if (n >= 1_000) {
    return Math.floor(n / 1_000) + 'K';
  }
  return Math.floor(n).toString();
}