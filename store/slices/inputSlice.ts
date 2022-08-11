import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';
import {
  INITIAL_MIN_POSITION,
  INITIAL_MAX_POSITION,
} from '@constants/variables';

interface IState {
  year: string | null;
  gender: string | null;
  purpose: string[];
  minBudgetOffsetX: number;
  maxBudgetOffsetX: number;
  brands: string[];
  fuels: string[];
  categories: string[]; // category?
}

const initialState: IState = {
  year: null,
  gender: null,
  purpose: [],
  /* budger range bar 안에 있는 ball의 초기 위치*/
  minBudgetOffsetX: INITIAL_MIN_POSITION,
  maxBudgetOffsetX: INITIAL_MAX_POSITION,
  brands: [],
  fuels: [],
  categories: [],
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
    moveMinBudgetX: (state, action: PayloadAction<number>) => {
      const minBudgetOffsetX = action.payload;
      state.minBudgetOffsetX = minBudgetOffsetX;
      return;
    },
    moveMaxBudgetX: (state, action: PayloadAction<number>) => {
      const maxBudgetOffsetX = action.payload;
      state.maxBudgetOffsetX = maxBudgetOffsetX;
      return;
    },
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
