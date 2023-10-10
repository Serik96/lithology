'use client';

import { ChangeEvent, useState } from 'react';
import { cn } from '@/helpers';
import s from './range-input.module.scss';

type TProps = {
  min: number;
  max: number;
  defaultValue: number;
  label?: string;
  onChange?: (value: number) => void;
  className?: string;
};

export const RangeInput = ({
  min,
  max,
  defaultValue,
  label,
  className,
  onChange,
}: TProps) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value) {
      setValue(value);
      onChange?.(value);
    }
  };

  const thumbPercentage = ((value - min) / (max - min)) * 100;
  const thumbAlignmentValue = thumbPercentage <= 50 ? 0 : 24;

  return (
    <div className={cn(s.range, className)}>
      {label && <div className={s.label}>{label}</div>}
      <div className={s.wrapper}>
        <div className={s.rangeInput}>
          <input
            type="range"
            max={max}
            min={min}
            value={value}
            onChange={handleChange}
            className={s.input}
          />
          <div className={s.line} />
          <div
            className={s.thumb}
            style={{ left: `calc(${thumbPercentage}% - ${thumbAlignmentValue}px)` }}
          />
        </div>
        <div className={s.value}>{value}</div>
      </div>
    </div>
  );
};
