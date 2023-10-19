import { currencySigns } from '@/const';
import { ECurrencySign } from '@/enums';

export function round(x: number, precision: number = 2) {
  const base = 10 ** precision;

  return Math.round((x + Number.EPSILON) * base) / base;
}

export function formatCurrency(
  amount: number,
  currency = ECurrencySign.USD,
  precision = 2,
) {
  const a = round(amount, precision);
  const sign = currencySigns[currency];

  return sign + a;
}

export function separateThousands(amount: number, delimiter = ',') {
  const a = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

  return a;
}
