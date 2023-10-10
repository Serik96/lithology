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
  name?: string;
  Icon?: FC;
  onChange?: (value: string) => void;
  multiline?: boolean;
  readonly?: boolean;
};

export const TextFieldRaw: FC<TProps> = ({
  label,
  value = '',
  name,
  placeholder,
  type = 'text',
  className,
  onChange,
  multiline,
  Icon,
  readonly = false,
}) => {
  const [valueState, setValueState] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  const inputElement = multiline ? (
    <textarea
      name={name}
      value={valueState}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(s.input, className)}
      readOnly={readonly}
    />
  ) : (
    <input
      name={name}
      type={type}
      value={valueState}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(s.input, className, Icon && s.withIcon)}
      readOnly={readonly}
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
