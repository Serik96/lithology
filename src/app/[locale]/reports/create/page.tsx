'use client';

import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { Breadcrumbs, Button, RangeInput } from '@/components/ui';
import ImgUploader from '@/components/ui/img-uploader';
import { EAlignValue } from '@/enums';
import { ArrowSquareRightIcon } from '@/icons';
import { reportsCreateBreadcrumbs } from './const';
import s from './create.module.scss';

const Create = () => {
  const t = useTranslations();
  const [pictures, setPictures] = useState<object>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const file = event.target.files?.[0];

    if (file) {
      setPictures(prevState => ({
        ...(prevState || {}),
        [name]: file,
      }));
    }
  };

  const hasGenerateBtn =
    typeof pictures === 'object'
      ? Object.prototype.hasOwnProperty.call(pictures, 'pic1') &&
        Object.prototype.hasOwnProperty.call(pictures, 'pic2')
      : false;

  return (
    <>
      <Breadcrumbs navLinks={reportsCreateBreadcrumbs} />

      <div className={s.wrapper}>
        <h1 className={s.heading}>{t('navigation.reports.upload-title')}</h1>
        <div className={s.imgLoaders}>
          <ImgUploader
            className={s.uploader}
            name="pic1"
            onChange={handleChange}
            label={t('navigation.reports.upload-image')}
          />
          <ImgUploader
            className={s.uploader}
            name="pic2"
            onChange={handleChange}
            label={t('navigation.reports.upload-image')}
            btnAlignment={EAlignValue.RIGHT}
          />
        </div>
        {hasGenerateBtn && (
          <div className={s.btns}>
            <Button className={s.generateBtn}>
              {t('navigation.reports.generate')}
              <ArrowSquareRightIcon />
            </Button>

            {/* @todo тестовые значения */}
            <RangeInput
              className={s.scaleInput}
              label={t('scale')}
              min={260}
              max={1000}
              defaultValue={260}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Create;
