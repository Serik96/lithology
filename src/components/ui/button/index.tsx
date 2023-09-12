import { useRouter } from 'next/router';
import { FC } from 'react';

type TProps = {
  href: string;
  text: string;
  onClick: () => void;
};

const Button: FC<TProps> = ({ text, onClick, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      onClick();
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
