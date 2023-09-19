import React, { ChangeEvent, useState } from 'react';
import { cn } from '@/helpers';
import s from './textfield.module.scss';

type TProps = {
  label?: string;
  value?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const TextField: React.FC<TProps> = ({
  label,
  value = '',
  placeholder,
  type = 'text',
  className,
  onChange,
}) => {
  const [valueState, setValueState] = useState(value);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <div className={s.textField}>
      {label && <label className={s.label}>{label}</label>}
      <input
        type={type}
        value={valueState}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(s.input, className)}
      />
    </div>
  );
};
