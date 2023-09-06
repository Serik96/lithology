import React from 'react'

import NotificationIcon from './NotificationIcon'
import AddIcon from './AddIcon'
import HomeIcon from './HomeIcon'
import SettingsIcon from './SettingsIcon'
import WalletIcon from './WalletIcon'
import FolderIcon from './FolderIcon'

type IconComponent = React.FC<any>

const iconComponents: IconComponent[] = [NotificationIcon, HomeIcon, FolderIcon, WalletIcon, SettingsIcon, AddIcon]

export default iconComponents
