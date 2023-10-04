import { createAction } from '@reduxjs/toolkit';
import { actionNameBuilder } from '@/helpers';
import { TModalClose, TModalOpen } from '@/model/modal/types';
import { name } from './const';

const named = actionNameBuilder(name);

export const actions = {
  open: createAction<TModalOpen>(named('open')),
  close: createAction<TModalClose>(named('close')),
  closeAll: createAction(named('closeAll')),
};
