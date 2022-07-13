import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  id: string | null;
  name: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  token: localStorage.getItem('token'),
};

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
});

export const { setToken } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
