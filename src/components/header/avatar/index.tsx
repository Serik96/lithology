import Image from 'next/image';
import React from 'react';
import s from './avatar.module.scss';
import { TAvatar } from './types';

const Avatar = ({ avatar, folderImg, name }: TAvatar) => {
  return (
    <div className={s.avatar}>
      <div className={s.avatarWrapper}>
        <Image
          src={avatar || '/temp/avatar.png'}
          width={48}
          height={48}
          alt={name}
          className={s.avatarImg}
        />
        <Image
          src={folderImg || '/temp/folder-image.png'}
          alt={name}
          className={s.avatarFolder}
          width="28"
          height="28"
        />
      </div>
      <div className={s.avatarName}>{name}</div>
    </div>
  );
};

export default Avatar;
