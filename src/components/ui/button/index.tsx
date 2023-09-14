import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers';
import s from './button.module.scss';

type TProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  className?: string;
}>;

export const Button: FC<TProps> = ({ children, onClick, href, className }) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();

    if (href) {
      void router.push(href);
    }
  };

  return (
    <button className={cn(s.btn, className)} onClick={handleClick}>
      {children}
    </button>
  );
};
