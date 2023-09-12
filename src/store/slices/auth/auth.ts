import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/store/slices/auth/const';

const auth = createSlice({
  // @todo name зачем здесь? он понадобится только в actions.ts и selectors.ts
  // поэтому создай константу в const.ts, и в тех файлах будешь из константы юзать
  name: 'auth',
  initialState,
  reducers: {},
});

export default auth.reducer;
