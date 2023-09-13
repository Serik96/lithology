
import Image from 'next/image';
import React from 'react';
import s from './avatar.module.scss';
import { TAvatar } from './types';

const Avatar = ({ avatar, folderImg, name }: TAvatar) => {
  return (
    <div className={s.avatar}>
      <div className={s.avatar__wrapper}>
        <Image src={avatar} width={48} height={48} alt={name} className="avatar__img" />
        <Image
          src={folderImg}
          alt={name}
          className={s.avatar__folder}
          width="28"
          height="28"
        />
      </div>
      <div className={s.avatar__name}>{name}</div>
    </div>
  );
};

export default Avatar;
