'use client';

import { Sidebar } from '@/components/sidebar';
import { Breadcrumbs } from '@/components/ui';
import { notificationsBreadcrumbs, notificationsSideLinks } from './const';

const Notifications = () => {
  return (
    <>
      <Breadcrumbs navLinks={notificationsBreadcrumbs} />
      <div>
        <Sidebar links={notificationsSideLinks} />
      </div>
    </>
  );
};

export default Notifications;
