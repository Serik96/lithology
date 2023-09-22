'use client';

import { ChangeEvent, memo, useState } from 'react';
import { cn } from '@/helpers';
import s from './textfield.module.scss';

type TProps = {
  label?: string;
  value?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  multiline?: boolean;
};
 
export const TextField: React.FC<TProps> = memo(
  ({ label, value = '', placeholder, type = 'text', className, onChange, multiline }) => {
    const [valueState, setValueState] = useState(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValueState(event.target.value);
      onChange?.(event.target.value);
    };

    const inputElement = multiline ? (
      <textarea
        value={valueState}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(s.input, className)}
      />
    ) : (
      <input
        type={type}
        value={valueState}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(s.input, className)}
      />
    );

    return (
      <div className={s.textField}>
        {label && <label className={s.label}>{label}</label>}
        {inputElement}
      </div>
    );
  },
);
