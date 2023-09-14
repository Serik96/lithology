import { createSlice } from '@reduxjs/toolkit';
import { authSliceName, initialState } from '@/store/slices/auth/const';

const auth = createSlice({
  name: authSliceName,
  initialState,
  reducers: {},
});

export default auth.reducer;
