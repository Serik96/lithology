import { TMember } from '@/types/project';
import { MemberCard } from './member-card';
import s from './members-list.module.scss';

type TProps = {
  members: TMember[];
};

export const MembersList = ({ members }: TProps) => {
  return (
    <div className={s.list}>
      {members.map((m, i) => (
        <MemberCard key={`member_${i}`} member={m} />
      ))}
    </div>
  );
};
