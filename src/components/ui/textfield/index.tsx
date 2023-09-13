import React, { ChangeEvent, useState } from 'react';
import s from './textfield.module.scss';

type TProps = {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (value: string | number) => void;
};

export const TextField: React.FC<TProps> = ({
  label = '',
  value = '',
  placeholder = '',
  type = 'text',
  onChange = () => {},
}) => {
  const [valueState, setValueState] = useState(value);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={s.textfield__wrapper}>
      {label && <label className={s.textfield__label}>{label}</label>}
      <input
        type={type}
        value={valueState}
        onChange={handleChange}
        placeholder={placeholder}
        className={s.textfield__input}
      />
    </div>
  );
};
