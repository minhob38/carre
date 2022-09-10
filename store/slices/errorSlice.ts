import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { actions as appActions } from '@store/slices/appSlice';

/* slices */
const initialState = {
  isServerError: false,
  retry: 0,
};

// https://redux-toolkit.js.org/api/createSlice
const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    setServerError: (state) => {
      state.isServerError = true;
      return;
    },
    setNormal: (state) => {
      state.isServerError = false;
      return;
    },
    retryError: (state) => {
      state.retry = state.retry + 1;
      return;
    },
  },
});

function* setServerErrorSage() {
  yield put(appActions.showServerErrorModal());
}

function* setNormalSaga() {
  yield put(appActions.hideServerErrorModal());
}

export function* errorSaga() {
  yield takeLatest(actions.setServerError, setServerErrorSage);
  yield takeLatest(actions.setNormal, setNormalSaga);
}

export const actions = errorSlice.actions;
export default errorSlice.reducer;
