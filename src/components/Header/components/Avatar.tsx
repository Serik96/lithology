import React from "react";
import Image from "next/image";

interface AvatarInterface {
    avatar: string,
    folderImg: string,
    name: string
}

const Avatar = ( { avatar, folderImg, name } : AvatarInterface) => {
    return (
        <div className={'avatar'}>
            <div className="avatar__wrapper">
                <Image src={avatar} width={48} height={48} alt={name} className="avatar__img" />
                <Image src={folderImg} alt={name} className="avatar__folder" width="28" height="28"/>
            </div>
            <div className="avatar__name">{name}</div>
        </div>
    )

}

export default Avatar