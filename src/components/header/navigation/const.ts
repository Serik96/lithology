import { routes } from '@/const/routes';
import { AddIcon, FolderIcon, HomeIcon, ProfileIcon, SettingsIcon } from '@/icons';
import { TNavLink } from './types';

export const navLinks: TNavLink[] = [
  {
    label: 'navigation.create',
    href: routes.project.create,
    icon: AddIcon,
  },
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
    icon: HomeIcon,
  },
  {
    label: 'navigation.folders',
    href: routes.project.folders,
    icon: FolderIcon,
  },
  {
    label: 'navigation.settings',
    href: routes.project.settings,
    icon: SettingsIcon,
  },
];

export const unsignedNavLinks: TNavLink[] = [
  {
    label: 'navigation.main',
    href: routes.project.main,
    icon: null,
  },
  {
    label: 'navigation.news',
    href: routes.project.news,
    icon: null,
  },
  {
    label: 'navigation.support',
    href: routes.project.support,
    icon: null,
  },
  {
    label: 'navigation.sign-in',
    href: routes.project.signin,
    icon: ProfileIcon,
  },
];
