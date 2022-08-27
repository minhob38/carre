import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';

interface IState {
  tendency: any;
  recoms: any;
}

/* slices */
const initialState: IState = {
  tendency: null,
  recoms: null,
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

    getUserRecomAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    saveUserRecom: (state, action: PayloadAction<any>) => {
      const recoms = action.payload;
      state.recoms = recoms;
    },
  },
});

/* sagas */

/**
 * 사용자 성향 조회 api 호출
 */
function* getUserTendencySaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.getUserTendency(surveyToken);
  yield put(actions.saveUserTendency(data));
}

/**
 * 추천차량을 조회 api 호출
 */
function* getUserRecomSaga(action: PayloadAction<string>) {
  const recommendationId = action.payload;
  const data = yield api.getUserRecommendation(recommendationId);
  yield put(actions.saveUserRecom(data));
}

export function* resultSaga() {
  yield takeLatest(actions.getUserTendencyAsync, getUserTendencySaga);
  yield takeLatest(actions.getUserRecomAsync, getUserRecomSaga);
}

export const actions = resultSlice.actions;
export default resultSlice.reducer;
