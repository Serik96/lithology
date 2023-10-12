import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from '@/helpers';
import { TMember } from '@/types';
import s from './member-card.module.scss';

type TProps = {
  member: TMember;
};

export const MemberCard = ({ member: { avatar, name, projects, reports } }: TProps) => {
  const t = useTranslations();

  return (
    <div className={cn(s.card)}>
      <Image className={s.avatar} src={avatar} alt={`${name} profile image`} width={128} height={128} />

      <div className={s.information}>
        <h4>{name}</h4>
        <p>{t('member-card.description', { projects, reports })}</p>
      </div>
    </div>
  );
};
