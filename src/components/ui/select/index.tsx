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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    onChange?.(event.target.value);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const selectElement = (
    <input
      name={name}
      value={valueState}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={readonly}
      className={cn(s.select, className)}
    />
  );

  return (
    <div className={s.selectInput}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.wrapper}>
        <DropIcon onClick={toggleSelect} className={isSelectOpen ? s.rotate : ''} />
        {selectElement}
        {isSelectOpen && (
          <ul>
            {options.map((option, i) => (
              <li
                key={`options_${i}`}
                onClick={() => {
                  setValueState(option.value);
                  onChange?.(option.value);
                  toggleSelect();
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const Select = memo(SelectRaw);
