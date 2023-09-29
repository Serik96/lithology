import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { routes } from '@/const';
import { cn, formatDate } from '@/helpers';
import {
  CloseIcon,
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
  foldersSlug: string;
};

export const ColsCard = ({
  foldersSlug,
  project: { top, title, archived, slug, created_at, reportsCount },
}: TProps) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <div className={cn(s.card, s.cardCols)}>
      <Link
        className={s.link}
        href={`${routes.project.allProjects.main}/${foldersSlug}/${slug}`}
      />
      <div className={s.statusIcons}>
        {top && (
          <div className={s.favoriteIcon}>
            <StarFilledIcon />
          </div>
        )}
        {archived && (
          <div className={s.archivedIcon}>
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
              <StarIcon />
              {t('table.add-to-favourites')}
            </div>
            <div className={s.moreActionBtn}>
              <CloudIcon />
              {t('table.add-to-archive')}
            </div>
            <div className={s.moreDeleteBtn}>
              <CloseIcon />
              {t('table.delete')}
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
