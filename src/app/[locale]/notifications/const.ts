import { routes } from '@/const';
import { ArchiveTick } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const notificationsNav: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.notifications.main',
    href: routes.project.notifications,
  },
];

export const notificationsSidebarNav: TSidebarLink[] = [
  {
    label: 'navigation.notifications.mark-all-read',
    icon: ArchiveTick,
    href: routes.project.notifications,
    isBottomLink: true,
  },
];
