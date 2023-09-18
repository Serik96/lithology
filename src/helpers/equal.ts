type TValue = Nullable<number | string>;
 
export const eq = (v1?: TValue, v2?: TValue, strict = false): boolean => {
  if (!v1 && !v2) {
    return strict ? v1 === v2 : true;
  }

  const t1 = typeof v1;
  const t2 = typeof v2;

  if (t1 === t2) {
    return v1 === v2;
  }

  const n1 = Number(v1);
  const n2 = Number(v2);

  if (n1 && n2 && n1 === n2) {
    return !strict;
  }

  const s1 = String(v1);
  const s2 = String(v2);

  if (s1 && s2 && s1 === s2) {
    return !strict;
  }

  return false;
};
