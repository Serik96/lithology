import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { routes } from '@/const';
import { EModalPurpose } from '@/enums/modal';
import { cn, formatDate } from '@/helpers';
import {
  CloseIcon,
  CloudFilledIcon,
  CloudIcon,
  MoreIcon,
  StarFilledIcon,
  StarIcon,
} from '@/icons';
import { ModalModel } from '@/model';
import { TSpecimen } from '@/types';
import s from './table-card.module.scss';

type TProps = {
  report: TSpecimen;
};

export const RowsCard = ({ report }: TProps) => {
  const t = useTranslations();
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const { openModal } = ModalModel.hooks.useModal({
    purpose: EModalPurpose.REPORT_DELETE,
    recordId: report.id,
  });
  // todo унифицировать это и многое здесь с cols-card
  const width = report.project_images?.length ? 100 / project_images.length : 0;

  return (
    <div className={cn(s.card, s.cardRows)}>
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
        {report.archived && (
          <div className={cn(s.archivedIcon, s.icon)}>
            <CloudIcon />
          </div>
        )}
      </div>
      <div className={s.cols}>
        <div className={s.col}>
          <div className={s.cardImgs}>
            {report.project_images &&
              report.project_images.map((e, i) => {
                return (
                  <Image
                    key={`project_img_${e}_${i}`}
                    src={e}
                    className={s.projectImage}
                    alt={report.title}
                    style={{
                      width: `${width}%`,
                    }}
                    width={302}
                    height={181}
                  />
                );
              })}
          </div>
          {report.title}
        </div>
        {/* @todo тут временные данные пока что не отобразили на макете что тут будет * /}
        <div className={s.col}>{point}</div>
        <div className={s.col}>{point}</div>
        <div className={s.col}>{point}</div>
        */}
        <div className={s.col}>
          {formatDate(report.created_at)}
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
                <div className={cn(s.moreIcon, report.archived && s.active)}>
                  {report.archived ? <CloudFilledIcon /> : <CloudIcon />}
                </div>

                {t('table.add-to-archive')}
              </div>
              <div className={s.moreDeleteBtn} onClick={openModal}>
                <CloseIcon />
                {t('delete')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
