'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { Button, Loader } from '@/components/ui';
import { EAlignValue, EButtonVariant } from '@/enums';
import { cn } from '@/helpers';
import { AddIcon, ExcludeIcon } from '@/icons';
import s from './file-uploader.module.scss';

type TProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  className?: string;
  loading?: boolean;
  imgLink?: string;
  btnAlignment?: EAlignValue;
};

const ImgUploader = ({
  onChange,
  name,
  label,
  loading,
  className,
  imgLink,
  btnAlignment,
}: TProps) => {
  const t = useTranslations();
  const [img, setImg] = useState(imgLink);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        if (e.target && typeof e.target.result === 'string') {
          setImg(e.target.result);
        }
      };

      onChange?.(event);
    }
  };

  const inputId = `upload_img_input_${name ?? Math.random()}`;

  return (
    <div className={s.fileLoader}>
      <div className={cn(s.inputWrapper, className)}>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          id={inputId}
          onChange={handleChange}
          className={s.input}
        />
        <div className={s.wrapper}>
          {loading ? (
            <Loader />
          ) : img ? (
            <Image
              alt={label ?? ''}
              src={img}
              width={200}
              height={200}
              className={s.img}
            />
          ) : (
            <>
              <div className={s.icon}>
                <ExcludeIcon />
              </div>
              {label && <div className={s.label}>{label}</div>}
            </>
          )}
        </div>
      </div>
      {img && (
        <Button
          variant={EButtonVariant.outlined}
          className={cn(s.changeImg, btnAlignment && s[btnAlignment])}
        >
          <label htmlFor={inputId} className={s.changeImgLabel}>
            <AddIcon />
            {t('navigation.reports.change-image')}
          </label>
        </Button>
      )}
    </div>
  );
};

export default ImgUploader;
