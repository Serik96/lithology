import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button } from '@/components/ui';
import { ESize } from '@/enums';
import { cn } from '@/helpers';
import { CloseFilledIcon } from '@/icons';
import s from './modal.module.scss';

type TProps = {
  open: boolean;
  onClose?: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  maxWidth: ESize;
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
  maxWidth,
}: TProps) => {
  const t = useTranslations();

  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      if (open) {
        htmlTag.classList.add('hideScroll');
      } else {
        htmlTag.classList.remove('hideScroll');
      }
    }
  }, [open]);

  return (
    open && (
      <div className={cn(s.modal, open && s.open)}>
        <div className={s.bg} onClick={handleClose} />
        <div className={cn(s.wrapper, s?.[maxWidth ?? ESize.md])}>
          <div className={s.closeBtn} onClick={handleClose}>
            <CloseFilledIcon />
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
          <div className={s.btns}>
            <Button className={s.cancelBtn} variant={'info-black'} onClick={handleClose}>
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
