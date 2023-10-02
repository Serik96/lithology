import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/helpers';
import { CloseFilledIcon } from '@/icons';
import s from './modal.module.scss';

type TProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  maxSize: number;
  cancelBtnText?: string;
  confirmBtnText?: string;
};

export const Modal = ({
  open,
  onClose,
  onConfirm,
  cancelBtnText,
  confirmBtnText,
  title,
  description,
  maxSize,
}: TProps) => {
  const t = useTranslations();

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      if (open) {
        htmlTag.style.overflowY = 'hidden';
      } else {
        htmlTag.style.overflowY = 'auto';
      }
    }
  }, [open]);

  return (
    open && (
      <div className={cn(s.modal, open && s.open)}>
        <div className={s.bg} onClick={onClose} />
        <div className={s.wrapper} style={{ maxWidth: maxSize }}>
          <div className={s.closeBtn} onClick={onClose}>
            <CloseFilledIcon />
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
          <div className={s.btns}>
            <Button className={s.cancelBtn} variant={'info-black'} onClick={onClose}>
              {cancelBtnText ?? t('cancel')}
            </Button>
            <Button className={s.confirmBtn} variant={'red'} onClick={onConfirm}>
              {confirmBtnText ?? t('confirm')}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
