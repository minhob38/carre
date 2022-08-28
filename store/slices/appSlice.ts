import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

/* slices */
const initialState = {
  isClicked: false,
  isInputWarningModal: false,
};

// https://redux-toolkit.js.org/api/createSlice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    clickButtonAsync: (state, action: PayloadAction) => {
      // action을 만들기 위한 함수입니다.
      return;
    },
    clickButton: (state, action: PayloadAction) => {
      state.isClicked = !state.isClicked;
    },
    showInputWariningModal: (state) => {
      state.isInputWarningModal = true;
    },
    hideInputWariningModal: (state) => {
      state.isInputWarningModal = false;
    },
  },
});

/* sagas */
function* clickButtonSaga(action) {
  yield delay(3000);
  yield put(actions.clickButton());
}

export function* appSaga() {
  yield takeLatest(actions.clickButtonAsync, clickButtonSaga);
}

export const actions = appSlice.actions;
export default appSlice.reducer;
