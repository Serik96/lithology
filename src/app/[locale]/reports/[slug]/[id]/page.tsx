'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ReactCompareImage from 'react-compare-image';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { complexStr, formatDate, formatTime } from '@/helpers';
import { useMountEffect } from '@/hooks';
import { CompareIcon } from '@/icons';
import { reportBreadcrumbs } from './const';
import s from './report.module.scss';

const Report = () => {
  const t = useTranslations();

  const { id } = useParams();

  useMountEffect(() => {
    console.log('Report>', id);
    /* @todo get speciment by id */
    // getSpecimen()
  });

  /* @todo все что ниже это чисто верстка (нет данных) */
  return (
    <>
      <Breadcrumbs navLinks={reportBreadcrumbs} />

      <div className={s.report}>
        <h1 className={s.heading}>{`${t('navigation.reports.report')} #${
          tempData.report.id
        }`}</h1>

        <div className={s.info}>
          <div className={s.item}>
            <div className={s.label}>{t('number')}</div>
            <div className={s.value}>{`#${tempData.report.id}`}</div>
          </div>
          <div className={s.item}>
            <div className={s.label}>{t('date')}</div>
            <div className={s.value}>{formatDate(tempData.report.created_at)}</div>
          </div>
          <div className={s.item}>
            <div className={s.label}>{t('time')}</div>
            <div className={s.value}>{formatTime(tempData.report.created_at)}</div>
          </div>
          <div className={s.item}>
            <div className={s.label}>{t('author')}</div>
            <div className={s.value}>
              <Image
                alt={tempData.report.author.first_name}
                width={32}
                height={32}
                className={s.avatar}
                src={tempData.report.author.avatar}
              />
              {complexStr(
                [tempData.report.author.first_name, tempData.report.author.last_name],
                ' ',
              )}
            </div>
          </div>
        </div>
        <div className={s.compareImage}>
          <ReactCompareImage
            leftImage={tempData.report.pic1}
            rightImage={tempData.report.pic2}
            handle={
              <div className={s.compareIcon}>
                <CompareIcon />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Report;
