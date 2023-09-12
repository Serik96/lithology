import { useRouter } from 'next/router';
import { FC } from 'react';

type TProps = {
  href: string;
  text: string;
  onClick?: () => void;
};

const Button: FC<TProps> = ({ text, onClick, href }) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();

    if (href) {
      void router.push(href);
    }
  };

  // @todo внутри папки размести файл стилей, сейчас прописан несуществующий класс
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

// @todo не используй export default, так трудно искать использования элементов
export default Button;
