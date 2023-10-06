import { Breadcrumbs } from '@/components/ui';
import { personalBreadcrumbs } from './const';

const Personal = () => {
  return (
    <>
      <Breadcrumbs navLinks={personalBreadcrumbs} />
    </>
  );
};

export default Personal;
