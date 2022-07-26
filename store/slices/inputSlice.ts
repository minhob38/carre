import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';
import {
  INITIAL_MIN_BUDGET,
  INITIAL_MAX_BUDGET,
  DEFAULT_YEAR,
  DEFAULT_PERSON,
  DEFAULT_DISTANCE,
} from '@constants/variables';

interface IState {
  birthYear: number;
  passengerCount: number;
  drivenDistanceInYear: number | 'UNKNOWN';
  gender: string | null;
  carUsagePurpose: string | null;
  budget: number;
  /* minBudgetPosition, maxBudgetPosition, minBudgetValue, maxBudgetValue 는 budget bar에 사용되는거, 추후 사용안하면 삭제하자 */
  minBudgetPosition: number;
  maxBudgetPosition: number;
  minBudgetValue: number;
  maxBudgetValue: number;
  brands: string[];
  fuels: string[];
  categories: string[]; // category?
  styles: string[];
  isWantSimilarPriceCar: boolean;
  survey: Record<string, string>;
}

const initialState: IState = {
  birthYear: DEFAULT_YEAR,
  gender: null,
  passengerCount: DEFAULT_PERSON,
  drivenDistanceInYear: DEFAULT_DISTANCE.value,
  carUsagePurpose: null,
  budget: 0,
  /* budget range bar 안에 있는 ball의 초기 위치 */
  minBudgetPosition: 0,
  maxBudgetPosition: 0,
  /* budget range bar 의 초기 예산 */
  minBudgetValue: INITIAL_MIN_BUDGET,
  maxBudgetValue: INITIAL_MAX_BUDGET,
  brands: [],
  fuels: [],
  categories: [],
  styles: [],
  isWantSimilarPriceCar: false,
  survey: {},
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    setBudget: (
      state,
      action: PayloadAction<ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { value } = action.payload;
      state['budget'] = Number(value);
    },
    setSelectOption: (
      state,
      action: PayloadAction<ChangeEvent<HTMLSelectElement>['target']>,
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setCategoryRadioBoxValue: (
      state,
      action: PayloadAction<{
        eventTarget: ChangeEvent<HTMLInputElement>['target'];
        category: string;
      }>,
    ) => {
      const { eventTarget, category } = action.payload;
      const { name, value } = eventTarget;
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
      // state.values.map((item) => {
      //   if (item.value !== value) return;
      //   item.score = score;
      // });
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
