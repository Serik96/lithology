'use client';

import { Sidebar } from '@/components/sidebar';
import { Breadcrumbs } from '@/components/ui';
import { notificationsNav, notificationsSidebarNav } from './const';

const Notifications = () => {
  return (
    <>
      <Breadcrumbs navLinks={notificationsNav} />
      <div>
        <Sidebar links={notificationsSidebarNav} />
      </div>
    </>
  );
};

export default Notifications;
