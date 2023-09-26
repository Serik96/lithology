import { createAction } from '@reduxjs/toolkit';

export const fetchDataRequest = createAction<string>('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction<unknown>('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction<string>('FETCH_DATA_FAILURE');
