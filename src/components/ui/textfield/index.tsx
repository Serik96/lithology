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
  icon?: FC;
  onChange?: (value: string) => void;
  multiline?: boolean;
};

export const TextFieldRaw: FC<TProps> = ({
  label,
  value = '',
  placeholder,
  type = 'text',
  className,
  onChange,
  multiline,
  icon,
}) => {
  const [valueState, setValueState] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  const Icon: Nullable<FC> = icon ?? null;

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
      className={cn(s.input, className, Icon && s.withIcon)}
    />
  );

  return (
    <div className={s.textField}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.wrapper}>
        {Icon && <Icon />}
        {inputElement}
      </div>
    </div>
  );
};

export const TextField = memo(TextFieldRaw);
