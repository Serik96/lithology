import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/interfaces';

const initialState: AuthState = {
  lang: 'en',
  isLoading: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeLang: (state, lang: PayloadAction<string>) => {
      state.lang = lang.payload;
    },
    updateLoading: state => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { changeLang } = auth.actions;
export default auth.reducer;
