'use client';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { EButtonVariant } from '@/enums';
import { cn } from '@/helpers';
import s from './button.module.scss';

type TProps = PropsWithChildren<{
  href?: string;
  onClick?: VoidFunction;
  className?: string;
  variant?: EButtonVariant;
  disabled?: boolean;
}>;

export const Button: FC<TProps> = ({
  children,
  onClick,
  href,
  className,
  disabled,
  variant,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();

    if (href) {
      void router.push(href);
    }
  };

  return (
    <button
      className={cn(s.btn, className, variant && s[variant])}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
