import { ECurrencySign } from '@/enums';

export function round(x: number, precision: number = 2) {
  const base = 10 ** precision;

  return Math.round((x + Number.EPSILON) * base) / base;
}

export function formatCurrency(
  amount: number,
  currency = ECurrencySign.usd,
  precision = 2,
) {
  const a = round(amount, precision);
  const sign = ECurrencySign[currency];

  return sign + a;
}
