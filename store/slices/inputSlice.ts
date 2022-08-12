import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

interface IState {
  year: string | null;
  gender: string | null;
  purpose: string[];
  minBudgetPosition: number;
  maxBudgetPosition: number;
  brands: string[];
  fuels: string[];
  categories: string[]; // category?
  similarBudget: boolean;
}

const initialState: IState = {
  year: null,
  gender: null,
  purpose: [],
  /* budger range bar 안에 있는 ball의 초기 위치*/
  minBudgetPosition: 0,
  maxBudgetPosition: 0,
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
  },
});

export const actions = inputSlice.actions;
export default inputSlice.reducer;
