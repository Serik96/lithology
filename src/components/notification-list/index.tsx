import { TNotification } from '@/types/project';
import { NotificationCard } from './notification-card';
import s from './notification-list.module.scss';

type TProps = {
  notifications: TNotification[];
};

export const NotificationList = ({ notifications }: TProps) => (
  <div className={s.list}>
    {notifications.map((n, i) => (
      <NotificationCard key={`notification_${i}`} notification={n} />
    ))}
  </div>
);
