import { ChangeEvent, FC, memo, useState } from 'react';
import { cn } from '@/helpers';
import { DropIcon } from '@/icons';
import s from './select.module.scss';

type Option = {
  label: string;
  value: string;
};

type TProps = {
  label?: string;
  value?: string;
  className?: string;
  options: Option[];
  name?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  placeholder?: string;
};

export const SelectRaw: FC<TProps> = ({
  label,
  value = '',
  name,
  placeholder,
  className,
  options,
  onChange,
  readonly,
}) => {
  const [valueState, setValueState] = useState(value);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const selectElement = (
    <select
      name={name}
      value={valueState}
      onClick={toggleSelect}
      onChange={handleChange}
      disabled={readonly}
      className={cn(s.select, className)}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options?.map((option, i) => (
        <option key={`options_${i}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className={s.selectInput}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.wrapper}>
        <DropIcon className={isSelectOpen ? s.rotate : ''} />
        {selectElement}
      </div>
    </div>
  );
};

export const Select = memo(SelectRaw);
