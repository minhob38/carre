import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';
import { INITIAL_MIN_BUDGET, INITIAL_MAX_BUDGET } from '@constants/variables';

interface IState {
  year: string | null;
  gender: string | null;
  purpose: string[];
  minBudgetPosition: number;
  maxBudgetPosition: number;
  minBudgetValue: number;
  maxBudgetValue: number;
  brands: string[];
  fuels: string[];
  categories: string[]; // category?
  similarBudget: boolean;
}

const initialState: IState = {
  year: null,
  gender: null,
  purpose: [],
  /* budget range bar 안에 있는 ball의 초기 위치 */
  minBudgetPosition: 0,
  maxBudgetPosition: 0,
  /* budget range bar 의 초기 예산 */
  minBudgetValue: INITIAL_MIN_BUDGET,
  maxBudgetValue: INITIAL_MAX_BUDGET,
  brands: [],
  fuels: [],
  categories: [],
  similarBudget: false,
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
      const set = new Set(state[name]);
      set.add(value);
      state[name] = [...set];
      return;
    },
    deleteCheckBoxItem: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value, type } = action.payload;
      const set = new Set(state[name]);
      set.delete(value);
      state[name] = [...set];
      return;
    },
    clickToggle: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value } = action.payload;
      if (value == 'true') state[name] = false;
      if (value == 'false') state[name] = true;
    },
    moveMinBudgetX: (state, action: PayloadAction<number>) => {
      const minBudgetPosition = action.payload;
      state.minBudgetPosition = minBudgetPosition;
      return;
    },
    moveMaxBudgetX: (state, action: PayloadAction<number>) => {
      const maxBudgetPosition = action.payload;
      state.maxBudgetPosition = maxBudgetPosition;
      return;
    },
    setMinBudgetX: (state, action: PayloadAction<number>) => {
      const minBudgetValue = action.payload;
      state.minBudgetValue = minBudgetValue;
      return;
    },
    setMaxBudgetX: (state, action: PayloadAction<number>) => {
      const maxBudgetValue = action.payload;
      state.maxBudgetValue = maxBudgetValue;
      return;
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
