import {
  CABINET_URL,
  CREATE_PROJECT_URL,
  FOLDERS_URL,
  PRICE_URL,
  SETTINGS_URL,
} from '@/const/routes';
import { AddIcon, FolderIcon, HomeIcon, SettingsIcon, WalletIcon } from '@/icons';
import { TNavLink } from '@/types/navigation';

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
  {
    label: 'Price',
    href: PRICE_URL,
    icon: WalletIcon,
  },
];
