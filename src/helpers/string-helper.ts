import { TStringObject } from '../types';

export function replaceBulk(
  str: string,
  findReplaces: TStringObject,
  ignoreCase = false,
): string {
  const regexes = [];
  const map = {};
  const flags = ['g'];
  ignoreCase && flags.push('i');

  for (const [find, replace] of Object.entries(findReplaces)) {
    regexes.push(find.replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
    map[find] = replace;
  }
  const regex = new RegExp(regexes.join('|'), flags.join(''));

  return str.replace(regex, matched => map[matched]);
}

export function replaceParams(str: string, params: TStringObject): string {
  const paramsWithBraces = Object.fromEntries(
    Object.entries(params).map(([k, v]) => [`{${k}}`, v]),
  );

  return replaceBulk(str, paramsWithBraces);
}

export function base64toBlob(b64Data: string, contentType = '', sliceSize = 512) {
  const x = b64Data.indexOf(',');
  if (x !== -1) {
    if (!contentType) {
      contentType = b64Data.substring(5, x);
    }
    b64Data = b64Data.substring(x + 1);
  }
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export function complexStr(ar: any[], glue = ', '): string {
  return ar.filter(Boolean).join(glue);
}

export const cn = (...args): string => {
  const classes = [];

  for (const cssClass of args) {
    if (Array.isArray(cssClass)) {
      classes.push(cn(...cssClass));
    } else {
      classes.push(cssClass);
    }
  }

  return classes.filter(Boolean).join(' ');
};

export function slash(path: string, ending = true): string {
  if (ending && !path.endsWith('/')) {
    return `${path}/`;
  }

  if (!ending && !path.startsWith('/')) {
    return `/${path}`;
  }

  return path;
}

export function unslash(path: string, ending = true): string {
  return path.replace(ending ? /\/+$/g : /^\/+/g, '');
}

export function digitCase(word: string, num: number) {
  return num < 1 ? word : word + 's';
}
