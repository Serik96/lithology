import { TObject, TStringNumberObject, TStringObject } from '../types';

export const findKey = (obj: TObject, predicate) =>
  Object.keys(obj).find(key => predicate(obj[key], key, obj));

export const strValuesToNum = (obj: TStringObject): TStringNumberObject =>
  Object.entries(obj).reduce((o, [key, value]) => {
    const n = Number(value);
    o[key] = isNaN(n) ? value : n;

    return o;
  }, {});

export const removeNullProperties = (obj: TObject): TObject => {
  Object.keys(obj).forEach((key: string) => {
    const value = obj[key];
    const hasProperties = value && Object.keys(value).length > 0;
    if (value === null) {
      delete obj[key];
    } else if (typeof value !== 'string' && hasProperties) {
      removeNullProperties(value);
    }
  });

  return obj;
};
