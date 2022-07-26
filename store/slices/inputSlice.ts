import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';

interface IState {
  year: string | null;
  gender: string | null;
  purpose: string[];
  minBudgetX: number;
  maxBudgetX: number;
}

const initialState: IState = {
  year: null,
  gender: null,
  purpose: [],
  /* budger range bar 안에 있는 ball의 초기 위치*/
  minBudgetX: 55,
  maxBudgetX: 55,
};

const inputSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRadioBoxValue: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    addCheckBoxItem: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value, type } = action.payload;
      const set = new Set(state.purpose);
      set.add(value);
      state[name] = [...set];
      return;
    },
    deleteCheckBoxItem: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value, type } = action.payload;
      const set = new Set(state.purpose);
      set.delete(value);
      state.purpose = [...set];
      return;
    },
    moveMinBudgetX: (state, action: PayloadAction<number>) => {
      const minBudgetX = action.payload;
      state.minBudgetX = minBudgetX;
      return;
    },
    moveMaxBudgetX: (state, action: PayloadAction<number>) => {
      const maxBudgetX = action.payload;
      state.maxBudgetX = maxBudgetX;
      return;
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
