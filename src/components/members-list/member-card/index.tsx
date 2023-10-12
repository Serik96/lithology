import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from '@/helpers';
import { ProfileIcon } from '@/icons';
import { TUser } from '@/types/user';
import s from './member-card.module.scss';

type TProps = {
  user: TUser;
};

export const MemberCard = ({ user: { avatar, first_name, last_name } }: TProps) => {
  const t = useTranslations();

  // @todo: узнать не линка ли это на страницу пользователя
  return (
    <div className={cn(s.card)}>
      {avatar ? (
        <Image
          className={s.avatar}
          src={avatar}
          alt={`${first_name} ${last_name} profile image`}
          width={128}
          height={128}
        />
      ) : (
        // @todo: переделать отображение, если понадобится
        <div className={cn(s.avatar, s.withoutImage)}>
          <ProfileIcon />
        </div>
      )}

      <div className={s.information}>
        <h4>{`${first_name} ${last_name}`}</h4>
        {/* @todo: убрать хардкод, когда появится подложка на бэке */}
        <p>{t('member-card.description', { projects: 17, reports: 9 })}</p>
      </div>

      {/* @todo: добавить управление ролью и правами пользователя */}
    </div>
  );
};
