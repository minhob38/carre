import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';
import { actions as errorActions } from './errorSlice';

interface IState {
  recoms: any;
  carPage: number;
}

/* slices */
const initialState: IState = {
  recoms: null,
  carPage: 1,
};

// https://redux-toolkit.js.org/api/createSlice
const recomSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    saveRecom: (state, action: PayloadAction<any>) => {
      const recoms = action.payload;
      state.recoms = recoms;
    },

    /* 랜딩페이지에서 추천받은 차량*/
    getRecomAsync: (state, action: PayloadAction<any>) => {
      if (state.recoms) {
        state.carPage = 1;
        state.recoms = null;
      }
      return;
    },

    setCarPage: (state, action: PayloadAction<number>) => {
      const carPage = action.payload;
      state.carPage = carPage;
    },
  },
});

/**
 * 추천차량을 조회 api 호출 (랜딩페이지 기반)
 */
function* getRecomSaga(action: PayloadAction<string>) {
  try {
    const apiUrl = action.payload;
    const data = yield api.getLadningRecommendation(apiUrl);
    yield put(errorActions.setNormal());
    yield put(actions.saveRecom(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

export function* recomSaga() {
  yield takeLatest(actions.getRecomAsync, getRecomSaga);
}

export const actions = recomSlice.actions;
export default recomSlice.reducer;
