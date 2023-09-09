import {
  CABINET_URL,
  CREATE_PROJECT_URL,
  FOLDERS_URL,
  SETTINGS_URL,
} from '@/const/routes';
import { AddIcon, FolderIcon, HomeIcon, SettingsIcon } from '@/icons';
import { TNavLink } from '@/types';

export const navLinks: TNavLink[] = [
  {
    label: 'Create project',
    href: CREATE_PROJECT_URL,
    icon: AddIcon,
  },
  {
    label: 'Home',
    href: CABINET_URL,
    icon: HomeIcon,
  },
  {
    label: 'Folders',
    href: FOLDERS_URL,
    icon: FolderIcon,
  },
  {
    label: 'Settings',
    href: SETTINGS_URL,
    icon: SettingsIcon,
  },
];
