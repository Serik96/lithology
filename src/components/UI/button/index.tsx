import * as React from 'react';
import { useRouter } from 'next/router';

interface ButtonProps {
  href: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
    else onClick();
  };

  return (
    <button className={'btn'} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
