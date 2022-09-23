import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';
import { actions as errorActions } from './errorSlice';

interface IState {
  tendency: any;
  recoms: any;
  recommendId: string | null;
  carIndex: number;
}

/* slices */
const initialState: IState = {
  tendency: null,
  recoms: null,
  recommendId: null,
  carIndex: 1,
};

// https://redux-toolkit.js.org/api/createSlice
const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    getUserTendencyAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    saveUserTendency: (state, action: PayloadAction<any>) => {
      const tendency = action.payload;
      state.tendency = tendency;
    },
    /* 설문을 통해 추천받은 차량*/
    getUserRecomAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    saveUserRecom: (state, action: PayloadAction<any>) => {
      const recoms = action.payload;
      state.recoms = recoms;
    },
    saveRecommendationId: (state, action: PayloadAction<string>) => {
      const recommendId = action.payload;
      state.recommendId = recommendId;
    },
    setCarIndex: (state, action: PayloadAction<number>) => {
      const carIndex = action.payload;
      state.carIndex = carIndex;
    },
    /* 랜딩페이지에서 추천받은 차량*/
    getLandingRecomAsync: (state, action: PayloadAction<any>) => {
      return;
    },
  },
});

/* sagas */

/**
 * 사용자 성향 조회 api 호출
 */
function* getUserTendencySaga(action: PayloadAction<string>) {
  try {
    const surveyToken = action.payload;
    const data = yield api.getUserTendency(surveyToken);
    yield put(errorActions.setNormal());
    yield put(actions.saveUserTendency(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

/**
 * 추천차량을 조회 api 호출 (설문기반)
 */
function* getUserRecomSaga(action: PayloadAction<string>) {
  try {
    const recommendationId = action.payload;
    const data = yield api.getUserRecommendation(recommendationId);
    yield put(errorActions.setNormal());
    yield put(actions.saveRecommendationId(recommendationId));
    yield put(actions.saveUserRecom(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

/**
 * 추천차량을 조회 api 호출 (랜딩페이지 기반)
 */
function* getLadningRecomSaga(action: PayloadAction<string>) {
  try {
    const apiUrl = action.payload;
    const data = yield api.getLadningRecommendation(apiUrl);
    yield put(errorActions.setNormal());
    yield put(actions.saveUserRecom(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

export function* resultSaga() {
  yield takeLatest(actions.getUserTendencyAsync, getUserTendencySaga);
  yield takeLatest(actions.getUserRecomAsync, getUserRecomSaga);
  yield takeLatest(actions.getLandingRecomAsync, getLadningRecomSaga);
}

export const actions = resultSlice.actions;
export default resultSlice.reducer;
