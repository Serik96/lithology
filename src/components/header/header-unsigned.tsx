import { Navigation } from '@/components/header/navigation';
import { Logo } from '@/components/ui/logo';

export const HeaderUnsigned = () => {
  return (
    <>
      <Logo />
      <Navigation isUnsigned />
    </>
  );
};
