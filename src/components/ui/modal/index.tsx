import { cn } from '@/helpers';
import s from './modal.module.scss';

type TProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onConfirm: () => void;
  onClose: () => void;
  title: string;
};

export const Modal = ({ open, setOpen, onConfirm, onClose }: TProps) => {
  return <div className={cn(s.modal, s.open)}></div>;
};
