import { routes } from "@/const";
import { ProfileIcon, UsersIcon } from "@/icons";
import { TBreadcrumbs, TSidebarLink } from "@/types";

export const companyCabinetBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.cabinet.company,
  },
];

export const companyCabinetSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.company-cabinet.user',
    Icon: ProfileIcon,
    href: routes.project.cabinet.main,
    isBottom: false,
  },
  {
    label: 'navigation.company-cabinet.members',
    Icon: UsersIcon,
    href: routes.project.settings,
    isBottom: false,
  },
]