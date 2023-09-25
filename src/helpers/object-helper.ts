import { TObject, TStringNumberObject, TStringObject } from '@/types';

export const findKey = (
  obj: TObject,
  predicate: (arg1: unknown, arg2: string, arg3: TObject) => boolean,
) => Object.keys(obj).find(key => predicate(obj[key], key, obj));

export const strValuesToNum = (obj: TStringObject): TStringNumberObject =>
  Object.entries(obj).reduce((o: TStringNumberObject, [key, value]) => {
    const n = Number(value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
      removeNullProperties(value as TObject);
    }
  });

  return obj;
};

export const getAllValues = (obj: TObject): unknown[] => {
  let values: unknown[] = [];

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      values = values.concat(getAllValues(obj[key] as TObject));
    } else {
      values.push(obj[key]);
    }
  }

  return values;
};
