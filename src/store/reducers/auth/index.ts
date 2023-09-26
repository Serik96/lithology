import { createSlice } from '@reduxjs/toolkit';
import { authSliceName, initialState } from './const';
import { reducers } from './reducers';

const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers,
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
