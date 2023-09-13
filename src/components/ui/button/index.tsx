import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import s from './button.module.scss';

type TProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export const Button: FC<TProps> = ({
  children,
  onClick = () => {},
  href,
  className = '',
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      void router.push(href);
    }

    onClick();
  };

  return (
    <button className={[s.btn, className].join(' ')} onClick={handleClick}>
      {children}
    </button>
  );
};
