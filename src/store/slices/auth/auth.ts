import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/store/slices/auth/const';

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default auth.reducer;
