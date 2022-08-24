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
  values: {
    value: string;
    title: string;
    score: number;
  }[];
  survey: Record<string, string>;
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
  values: [
    { value: 'perfomance', title: '성능', score: 5 },
    { value: 'reliablity', title: '신뢰성', score: 4 },
    { value: 'economics', title: '가성비', score: 3 },
    { value: 'convenience', title: '편의성', score: 3 },
    { value: 'technology', title: '신기술', score: 2 },
    { value: 'sentiment', title: '승차감', score: 2 },
    { value: 'design', title: '디자인', score: 1 },
  ],
  survey: {},
};

const inputSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategoryRadioBoxValue: (
      state,
      action: PayloadAction<{
        eventTarget: ChangeEvent<HTMLInputElement>['target'];
        category: string;
      }>,
    ) => {
      const { eventTarget, category } = action.payload;
      const { name, value } = eventTarget;
      // state[name] = value;
      state[category][name] = value;
    },
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
    changeValue: (
      state,
      action: PayloadAction<{ value: string; score: number }>,
    ) => {
      const { value, score } = action.payload;
      state.values.map((item) => {
        if (item.value !== value) return;
        item.score = score;
      });
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
