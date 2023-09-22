'use client';

import { ChangeEvent, FC, memo, useState } from 'react';
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

// eslint-disable-next-line react/display-name
export const TextField: FC<TProps> = memo(
  // eslint-disable-next-line react/prop-types
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
