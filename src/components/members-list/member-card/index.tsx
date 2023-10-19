import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { cn } from '@/helpers';
import { UserModel } from '@/model';
import { TUser } from '@/types/user';
import s from './member-card.module.scss';

type TProps = {
  user: TUser;
};

export const MemberCard = ({ user: { id, avatar, first_name, last_name } }: TProps) => {
  const t = useTranslations();

  return (
    <Link className={cn(s.card)} href={UserModel.domain.getUserHref({ userId: id })}>
      {avatar ? (
        <Image
          className={s.avatar}
          src={avatar}
          alt={`${first_name} ${last_name} profile image`}
          width={128}
          height={128}
        />
      ) : (
        <div className={cn(s.avatar, s.withoutImage)}>{first_name[0]}</div>
      )}

      <div className={s.information}>
        <h4>{`${first_name} ${last_name}`}</h4>
        {/* @todo: убрать хардкод, когда появится подложка на бэке */}
        <p>{t('member-card.description', { projects: 17, reports: 9 })}</p>
      </div>

      {/* @todo: добавить управление ролью и правами пользователя */}
    </Link>
  );
};
