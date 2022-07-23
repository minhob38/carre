import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';

interface IState {
  year: string | null;
  gender: string | null;
  purpose: string[];
}

const initialState: IState = {
  year: null,
  gender: null,
  purpose: [],
};

const inputSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeInput: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value } = action.payload;

      if (name === 'purpose') {
        const set = new Set(state.purpose);
        set.add(value);
        state.purpose = [...set];
        return;
      }

      state[name] = value;
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
