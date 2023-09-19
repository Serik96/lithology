'use client';

import { navNotifications } from '@/app/[locale]/notifications/const';
import { Breadcrumbs } from '@/components/ui';

const Notifications = () => {
  return (
    <>
      <Breadcrumbs navLinks={navNotifications} />
    </>
  );
};

export default Notifications;
 