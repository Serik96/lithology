import { routes } from '@/const';
import { BuildsIcon, EmailIcon, PayIcon, UnlockIcon, UsersIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const cabinetBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.profile.main,
  },
];

export const cabinetSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.cabinet.company',
    Icon: BuildsIcon,
    href: routes.project.profile.company.main,
  },
  {
    label: 'navigation.cabinet.members',
    Icon: UsersIcon,
    href: routes.project.profile.company.members.main,
  },
  {
    label: 'navigation.cabinet.change-email',
    Icon: EmailIcon,
    href: routes.auth.changeEmail.main,
    isBottom: true,
  },
  {
    label: 'navigation.cabinet.change-password',
    Icon: UnlockIcon,
    href: routes.auth.changePassword.main,
  },
  {
    label: 'navigation.cabinet.subscribtion',
    Icon: PayIcon,
    href: routes.project.subscription.main,
  },
];
