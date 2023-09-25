import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { routes } from '@/const';
import { cn } from '@/helpers';
import { CloseIcon, CloudIcon, FolderIcon, MoreIcon, StarIcon } from '@/icons';
import { TFolder } from '@/types/project';
import s from './table-card.module.scss';

export const RowsCard = ({
  name,
  slug,
  created_at,
  project_info: { grain, area, orientation },
}: TFolder) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <div className={cn(s.card, s.cardRows)}>
      <Link className={s.link} href={`${routes.project.allProjects.main}/${slug}`} />
      <div className={s.cardTitle}>
        <div className={s.cardHeading}>
          <FolderIcon />
          {name}
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
    </div>
  );
};
