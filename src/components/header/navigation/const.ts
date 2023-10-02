import { routes } from '@/const/routes';
import { AddIcon, FolderIcon, HomeIcon, ProfileIcon, SettingsIcon } from '@/icons';
import { TNavLink } from './types';

export const navLinks: TNavLink[] = [
  {
    label: 'navigation.create',
    href: routes.project.reports.create,
    icon: AddIcon,
    isActive: true,
  },
  {
    label: null,
    href: routes.project.cabinet,
    icon: HomeIcon,
  },
  {
    label: null,
    href: routes.project.allProjects.main,
    icon: FolderIcon,
  },
  {
    label: null,
    href: routes.project.settings,
    icon: SettingsIcon,
  },
];

export const unsignedNavLinks: TNavLink[] = [
  {
    label: 'navigation.main',
    href: routes.public.main,
    icon: null,
  },
  {
    label: 'navigation.news',
    href: routes.public.news,
    icon: null,
  },
  {
    label: 'navigation.support',
    href: routes.public.support,
    icon: null,
  },
  {
    label: 'navigation.sign-in',
    href: routes.auth.signIn,
    icon: ProfileIcon,
  },
];
