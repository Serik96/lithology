import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { routes } from '@/const';
import { EModalPurpose } from '@/enums/modal';
import { cn, formatDate } from '@/helpers';
import { CloseIcon, FolderIcon, MoreIcon, StarFilledIcon, StarIcon } from '@/icons';
import { ModalModel } from '@/model';
import { TSpecimen } from '@/types/project';
import s from './table-card.module.scss';

type TProps = {
  report: TSpecimen;
};

export const ColsCard = ({ report }: TProps) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const { openModal } = ModalModel.hooks.useModal({
    purpose: EModalPurpose.REPORT_DELETE,
    recordId: report.id,
  });
  const pics = [report.pic1, report.pic2].filter(Boolean);

  return (
    <>
      <div className={cn(s.card, s.cardCols)}>
        <Link
          className={s.link}
          href={`${routes.project.allProjects.main}/${report.slug}`}
        />
        <div className={s.statusIcons}>
          {top && (
            <div className={cn(s.favoriteIcon, s.icon)}>
              <StarFilledIcon />
            </div>
          )}
        </div>
        <div className={s.cardTitle}>
          <div className={s.cardHeading}>
            <FolderIcon />
            {report.title}
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
              <div className={s.moreDeleteBtn} onClick={openModal}>
                <CloseIcon />
                {t('delete')}
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className={s.info}>
          {report.grain && (
            <div className={s.infoItem}>{`${t('table.fields.grain')}: ${
              report.grain
            }`}</div>
          )}
          {report.area && (
            <div className={s.infoItem}>{`${t('table.fields.area')}: ${
              report.area
            }`}</div>
          )}
          {report.orientation && (
            <div className={s.infoItem}>{`${t('table.fields.area')}: ${
              report.orientation
            }`}</div>
          )}
        </div>
        */}
        {pics.length && (
          <div className={s.cardImgs}>
            {pics.map((e, i) => (
              <Image
                key={`project_img_${e}_${i}`}
                src={e}
                className={s.projectImage}
                alt={report.title}
                width={302}
                height={181}
              />
            ))}
          </div>
        )}
        <div className={s.date}>{formatDate(report.created_at)}</div>
      </div>
    </>
  );
};
