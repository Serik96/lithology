import { Logo } from '@/components/ui/logo';
import { Navigation } from './navigation';

export const HeaderUnsigned = () => {
  return (
    <>
      <Logo />
      <Navigation isUnsigned />
    </>
  );
};
