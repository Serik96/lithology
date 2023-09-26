import { FormEvent } from 'react';

export const getFormValue = (name: string, e: FormEvent<HTMLFormElement>) => {
  const target = e.currentTarget.elements;
  return (target.namedItem(name) as HTMLInputElement).value;
};
