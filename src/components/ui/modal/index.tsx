import { useTranslations } from 'next-intl';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui';
import { EButtonVariant, ESizeValue } from '@/enums';
import { EModalPurpose } from '@/enums/modal';
import { cn } from '@/helpers';
import { CloseFilledIcon } from '@/icons';
import { ModalModel } from '@/model';
import s from './modal.module.scss';

type TProps = PropsWithChildren<{
  purpose: EModalPurpose;
  onClose?: VoidFunction;
  onConfirm: VoidFunction;
  title: string;
  description: string;
  maxWidth: ESizeValue;
  cancelBtnText?: string;
  confirmBtnText?: string;
}>;

export const Modal = ({
  purpose,
  onClose,
  onConfirm,
  cancelBtnText,
  confirmBtnText,
  title,
  description,
  children,
  maxWidth,
}: TProps) => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const isOpened = useSelector(ModalModel.store.selectors.isOpened(purpose));

  const handleClose = () => {
    dispatch(ModalModel.store.actions.close({ purpose }));
    onClose?.();
  };

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      if (isOpened) {
        htmlTag.classList.add('hideScroll');
      } else {
        htmlTag.classList.remove('hideScroll');
      }
    }
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return (
    <div className={cn(s.modal, isOpened && s.open)}>
      <div className={s.bg} onClick={handleClose} />
      <div className={cn(s.wrapper, s?.[maxWidth ?? ESizeValue.MD])}>
        <div className={s.closeBtn} onClick={handleClose}>
          <CloseFilledIcon />
        </div>
        {title && <div className={s.title}>{title}</div>}
        {description && <div className={s.description}>{description}</div>}
        {children}
        <div className={s.buttons}>
          <Button
            className={s.cancelBtn}
            variant={EButtonVariant.INFO_BLACK}
            onClick={handleClose}
          >
            {cancelBtnText ?? t('cancel')}
          </Button>
          <Button
            className={s.confirmBtn}
            variant={EButtonVariant.RED}
            onClick={onConfirm}
          >
            {confirmBtnText ?? t('confirm')}
          </Button>
        </div>
      </div>
    </div>
  );
};
