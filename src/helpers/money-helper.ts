import { currencySigns } from '@/const';

export function round(x: number, precision: number = 2) {
  const base = 10 ** precision;

  return Math.round((x + Number.EPSILON) * base) / base;
}

export function formatCurrency(amount, currency = 'usd', precision = 2) {
  const a = round(amount, precision);
  const sign = currencySigns[currency];

  return sign + a;
}
