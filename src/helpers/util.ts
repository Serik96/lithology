export const boolToNum = (value?: boolean | null): number | null =>
  value === null || value === undefined ? null : Number(value);
