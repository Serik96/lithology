import { ChangeEvent, FC, memo, useState } from 'react';
import { cn } from '@/helpers';
import s from './selectfield.module.scss';

type TOption = {
  value: string;
  label: string;
};

type TProps = {
  label?: string;
  value?: string;
  options?: TOption[];
  className?: string;
  placeholder?: string;
  name?: string;
  Icon?: FC;
  readonly?: boolean;
  onChange?: (value: string) => void;
};

export const SelectFieldRaw: FC<TProps> = ({
  label,
  value = '',
  placeholder,
  className,
  name,
  Icon,
  onChange,
  readonly,
}) => {
  const [valueState, setValueState] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  const inputElement = (
    <input
      type="text"
      name={name}
      value={valueState}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(s.input, className, Icon && s.withIcon)}
      readOnly={readonly}
    />
  );

  return (
    <div className={s.selectField}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.wrapper}>
        {Icon && <Icon />}
        {inputElement}
      </div>
    </div>
  );
};

export const SelectField = memo(SelectFieldRaw);
