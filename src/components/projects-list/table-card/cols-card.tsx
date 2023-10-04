import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { routes } from '@/const';
import { cn, formatDate } from '@/helpers';
import {
  CloseIcon,
  CloudFilledIcon,
  CloudIcon,
  FolderIcon,
  MoreIcon,
  StarFilledIcon,
  StarIcon,
} from '@/icons';
import { TProject } from '@/types/project';
import s from './table-card.module.scss';

type TProps = {
  project: TProject;
};

export const ColsCard = ({
  project: { top, title, archived, slug, created_at, reportsCount },
}: TProps) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <div className={cn(s.card, s.cardCols)}>
      <Link className={s.link} href={`${routes.project.reports.main}/${slug}`} />
      <div className={s.statusIcons}>
        {top && (
          <div className={cn(s.favoriteIcon, s.icon)}>
            <StarFilledIcon />
          </div>
        )}
        {archived && (
          <div className={cn(s.archivedIcon, s.icon)}>
            <CloudIcon />
          </div>
        )}
      </div>
      <div className={s.cardTitle}>
        <div className={s.cardHeading}>
          <FolderIcon />
          {title}
        </div>
        <div className={s.more}>
          <div className={s.moreBtn} onClick={() => setIsMoreVisible(true)}>
            <MoreIcon />
          </div>
          <div
            className={cn(s.moreBg, isMoreVisible && s.visible)}
            onClick={() => setIsMoreVisible(false)}
          />
          <div className={cn(s.moreView, isMoreVisible && s.visible)}>
            <div className={s.moreActionBtn}>
              <div className={cn(s.moreIcon, top && s.active)}>
                {top ? <StarFilledIcon /> : <StarIcon />}
              </div>
              {t('table.add-to-favourites')}
            </div>
            <div className={s.moreActionBtn}>
              <div className={cn(s.moreIcon, archived && s.active)}>
                {archived ? <CloudFilledIcon /> : <CloudIcon />}
              </div>

              {t('table.add-to-archive')}
            </div>
            <div className={s.moreDeleteBtn}>
              <CloseIcon />
              {t('delete')}
            </div>
          </div>
        </div>
      </div>

      <div className={s.date}>{`${t('table.created')}: ${formatDate(created_at)}`}</div>

      <Button variant={'info'} className={s.reportsBtn}>
        {t('table.reports', { count: reportsCount })}
      </Button>
    </div>
  );
};
