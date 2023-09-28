import { createSelector } from '@reduxjs/toolkit';
import { createBaseSelector } from '@/helpers';
import { TAuthState } from '@/model/auth/types';
import { name } from './const';

const baseSelector = createBaseSelector<TAuthState>(name);

export const selectors = {
  token: createSelector(baseSelector, state => state.token),
  user: createSelector(baseSelector, state => state.user),
  isPending: createSelector(baseSelector, state => state.pending),
  isAuthenticated: createSelector(baseSelector, state => !!state.token && !!state.user),
};
