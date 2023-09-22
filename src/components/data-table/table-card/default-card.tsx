import { cn, formatDate } from '@/helpers';
import { FolderIcon, MoreIcon } from '@/icons';
import { TFolder } from '@/types/project';
import s from './table-card.module.scss';

export const DefaultCard = ({ name, created_at, project_info: { point } }: TFolder) => {
  return (
    <div className={cn(s.card, s.cardDefault)}>
      <div className={s.cardCol}>
        <FolderIcon />
        {name}
      </div>
      {/* @todo тут временные данные пока что не отобразили на макете что тут будет */}
      <div className={s.cardCol}>{point}</div>
      <div className={s.cardCol}>{point}</div>
      <div className={s.cardCol}>{point}</div>
      <div className={s.cardCol}>
        {formatDate(created_at)}
        <div className={s.moreBtn}>
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};
