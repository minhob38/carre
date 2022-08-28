import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';

interface IState {
  dealer: string | null;
}

/* slices */
const initialState: IState = {
  dealer: null,
};

// https://redux-toolkit.js.org/api/createSlice
const dealerSlice = createSlice({
  name: 'dealer',
  initialState,
  reducers: {
    setRadioBoxValue: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

/* sagas */
// export function* dealerSaga() {}

export const actions = dealerSlice.actions;
export default dealerSlice.reducer;
