import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { actions as appActions } from './appSlice';
import { actions as errorActions } from './errorSlice';
import * as api from '@apis/api';

interface IState {
  dealer: string | null;
  dealers: null | Record<string, any>[];
}

/* slices */
const initialState: IState = {
  dealer: null,
  dealers: null,
};

// https://redux-toolkit.js.org/api/createSlice
const dealerSlice = createSlice({
  name: 'dealer',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    setRadioBoxValue: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    findDealerAsync: (state, action: PayloadAction<void>) => {
      return;
    },
    getBrandDealersAsync: (state, action: PayloadAction<string>) => {
      return;
    },
    saveBrandDealers: (state, action: PayloadAction<any>) => {
      const dealers = action.payload;
      state.dealers = dealers;
      return;
    },
  },
});

function* findDealerSaga(action: PayloadAction<any>) {
  // const surveyToken = action.payload;
  // const data = yield api.getUserTendency(surveyToken);
  // yield put(actions.saveUserTendency(data));
  yield put(appActions.showDealerMatchingModal());
  yield delay(3000);
  yield put(appActions.hideDealerMatchingModal());
  yield put(appActions.showDealerMatchedModal());
}

function* getBrandDealersSaga(action: PayloadAction<string>) {
  try {
    const brandCode = action.payload;
    const data = yield api.getBrandDealers(brandCode);
    yield put(errorActions.setNormal());
    yield put(actions.saveBrandDealers(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

/* sagas */
export function* dealerSaga() {
  yield takeLatest(actions.findDealerAsync, findDealerSaga);
  yield takeLatest(actions.getBrandDealersAsync, getBrandDealersSaga);
}

export const actions = dealerSlice.actions;
export default dealerSlice.reducer;
