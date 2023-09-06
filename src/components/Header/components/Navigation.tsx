import React from 'react'
import Link from 'next/link'

import AddIcon from '@/icons/AddIcon'
import HomeIcon from '@/icons/HomeIcon'
import FolderIcon from '@/icons/FolderIcon'
import SettingsIcon from '@/icons/SettingsIcon'
import WalletIcon from '@/icons/WalletIcon'

type NavLinkProps = {
  label: string
  href: string
  icon: React.FC
}

const navLinks: NavLinkProps[] = [
  {
    label: 'Create project',
    href: '/create-project',
    icon: <AddIcon />
  },
  {
    label: 'Home',
    href: '/home',
    icon: <HomeIcon />
  },
  {
    label: 'Folders',
    href: '/folders',
    icon: <FolderIcon />
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />
  },
  {
    label: 'Price',
    href: '/price',
    icon: <WalletIcon />
  }
]

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {navLinks.map(e => (
          <li key={'header__list-item' + e.href}>
            <Link href={e.href} className="header__list-link">
              {e.icon}
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
