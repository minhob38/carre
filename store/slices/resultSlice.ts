import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';

interface IState {
  tendency: any;
}

/* slices */
const initialState: IState = {
  tendency: null,
};

// https://redux-toolkit.js.org/api/createSlice
const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    getUserTendencyAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    saveUserTendency: (state, action: PayloadAction<any>) => {
      const tendency = action.payload;
      state.tendency = tendency;
    },
  },
});

/* sagas */

/**
 * 추천차량을 조회 api 호출
 */
function* getUserTendencySaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.getUserTendency(surveyToken);
  yield put(actions.saveUserTendency(data));
}

export function* resultSaga() {
  yield takeLatest(actions.getUserTendencyAsync, getUserTendencySaga);
}

export const actions = resultSlice.actions;
export default resultSlice.reducer;
