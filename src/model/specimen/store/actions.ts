import { createAction } from '@reduxjs/toolkit';
import { actionNameBuilder } from '@/helpers';
import { TSpecimenLoadAction, TSpecimenLoadResponse } from '../types';
import { name } from './const';

const named = actionNameBuilder(name);

export const actions = {
  load: {
    trigger: createAction<TSpecimenLoadAction>(named('load/trigger')),
    pending: createAction(named('load/pending')),
    successful: createAction<TSpecimenLoadResponse>(named('load/successful')),
    failed: createAction(named('load/failed')),
    completed: createAction(named('load/completed')),
  },
};
