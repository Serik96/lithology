import Image from 'next/image';
import { cn, formatDate, formatHour } from '@/helpers';
import { ProfileIcon } from '@/icons';
import { TNotification } from '@/types/project';
import s from './notification-card.module.scss';

type TProps = {
  notification: TNotification;
};

export const NotificationCard = ({
  notification: { avatar, first_name, last_name, description, created_at },
}: TProps) => {
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
        <div className={cn(s.avatar, s.withoutImage)}>
          <ProfileIcon />
        </div>
      )}

      <div className={s.information}>
        <h4>{description}</h4>
        <p>{`${formatHour(created_at)}, ${formatDate(created_at)}`}</p>
      </div>
    </div>
  );
};
