import { createAction } from '@reduxjs/toolkit';
import { EModalPurpose } from '@/enums/modal';
import { actionNameBuilder } from '@/helpers';
import { name } from './const';

const named = actionNameBuilder(name);

export const actions = {
  open: createAction<{ purpose: EModalPurpose }>(named('open')),
  close: createAction<{ purpose: EModalPurpose }>(named('close')),
  closeAll: createAction(named('closeAll')),
};
