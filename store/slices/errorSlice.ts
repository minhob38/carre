import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

/* slices */
const initialState = {
  isInternalServerError: false,
};

// https://redux-toolkit.js.org/api/createSlice
const errorSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    clickButtonAsync: (state, action: PayloadAction) => {
      // action을 만들기 위한 함수입니다.
      return;
    },
  },
});

export const actions = errorSlice.actions;
export default errorSlice.reducer;
