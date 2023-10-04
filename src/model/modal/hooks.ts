import { useDispatch } from 'react-redux';
import { actions } from './store';
import { TModalOpen } from './types';

type TProps = TModalOpen;

export function useModal(options: TProps) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(actions.open(options));
  };

  const closeModal = () => {
    dispatch(
      actions.close({
        purpose: options.purpose,
      }),
    );
  };

  const closeAllModals = () => {
    dispatch(actions.closeAll());
  };

  return { openModal, closeModal, closeAllModals };
}
