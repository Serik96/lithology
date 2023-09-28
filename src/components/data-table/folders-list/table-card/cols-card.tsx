import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
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
import { TFolder } from '@/types/project';
import { formattedCardInfo } from './const';
import s from './table-card.module.scss';

export const ColsCard = ({
  top,
  archived,
  name,
  slug,
  created_at,
  project_info: { grain, area, orientation },
  project_images,
}: TFolder) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const info = formattedCardInfo(grain, area, orientation);

  return (
    <div className={cn(s.card, s.cardCols)}>
      <Link className={s.link} href={`${routes.project.allProjects.main}/${slug}`} />
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

      <div className={s.info}>
        {info.map((e, i) => (
          <div key={`project_info_${e.value}_${i}`} className={s.infoItem}>
            {`${t(e.label)}: ${e.value}`}
          </div>
        ))}
      </div>
      <div className={s.cardImgs}>
        {project_images &&
          project_images.map((e, i) => {
            const width = 100 / project_images.length;

            return (
              <Image
                key={`project_img_${e}_${i}`}
                src={e}
                className={s.projectImage}
                alt={name}
                style={{
                  width: `${width}%`,
                }}
                width={302}
                height={181}
              />
            );
          })}
      </div>
      <div className={s.date}>{formatDate(created_at)}</div>
    </div>
  );
};
