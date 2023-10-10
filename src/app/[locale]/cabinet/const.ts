import { routes } from "@/const";
import { BuildsIcon, EmailIcon, PayIcon, UnlockIcon, UsersIcon } from "@/icons";
import { TBreadcrumbs, TSidebarLink } from "@/types";

export const cabinetBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.cabinet.main,
  },
];

export const cabinetSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.cabinet.company',
    Icon: BuildsIcon,
    href: routes.project.cabinet.company,
    isBottom: false,
  },
  {
    label: 'navigation.cabinet.members',
    Icon: UsersIcon,
    href: routes.project.settings,
    isBottom: false,
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
    isBottom: false,
  },
  {
    label: 'navigation.cabinet.subscribtion',
    Icon: PayIcon,
    href: routes.project.subscription.main,
    isBottom: false,
  },
]