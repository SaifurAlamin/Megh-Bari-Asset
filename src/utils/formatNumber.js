/** Formats numbers using Bangladeshi digit grouping by default. */
export function formatNumber(
  value,
  { locale = 'en-BD', maximumFractionDigits = 2 } = {},
) {
  const number = Number(value)
  if (!Number.isFinite(number)) return '—'

  return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(number)
}
