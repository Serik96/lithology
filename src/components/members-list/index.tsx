import { TUser } from '@/types/user';
import { MemberCard } from './member-card';
import s from './members-list.module.scss';

type TProps = {
  users: TUser[];
};

export const MembersList = ({ users }: TProps) => (
  <div className={s.list}>
    {users.map((m, i) => (
      <MemberCard key={`user_${i}`} user={m} />
    ))}
  </div>
);
