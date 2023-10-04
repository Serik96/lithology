import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
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
import { TReport } from '@/types/project';
import s from './table-card.module.scss';

type TProps = {
  report: TReport;
  setModalOpen: (value: boolean) => void;
};

export const ColsCard = ({
  setModalOpen,
  report: {
    top,
    archived,
    name,
    slug,
    created_at,
    project_info: { grain, area, orientation },
    project_images,
  },
}: TProps) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const width = 100 / project_images.length;

  return (
    <>
      <div className={cn(s.card, s.cardCols)}>
        <Link className={s.link} href={`${routes.project.allProjects.main}/${slug}`} />
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
              <div className={s.moreDeleteBtn} onClick={() => setModalOpen(true)}>
                <CloseIcon />
                {t('delete')}
              </div>
            </div>
          </div>
        </div>

        <div className={s.info}>
          {grain && (
            <div className={s.infoItem}>{`${t('table.fields.grain')}: ${grain}`}</div>
          )}
          {area && (
            <div className={s.infoItem}>{`${t('table.fields.area')}: ${area}`}</div>
          )}
          {orientation && (
            <div className={s.infoItem}>{`${t(
              'table.fields.area',
            )}: ${orientation}`}</div>
          )}
        </div>
        <div className={s.cardImgs}>
          {project_images &&
            project_images.map((e, i) => {
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
    </>
  );
};
