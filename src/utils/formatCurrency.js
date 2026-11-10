/** Formats an amount as Bangladeshi Taka by default. */
export function formatCurrency(
  amount,
  { currency = 'BDT', locale = 'en-BD', maximumFractionDigits = 0 } = {},
) {
  const value = Number(amount)
  if (!Number.isFinite(value)) return '—'

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
  }).format(value)
}
