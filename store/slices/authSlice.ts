import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as api from '@apis/api';
import { actions as appActions } from './appSlice';

interface IState {
  isTotalTermAgreement: boolean;
  isInfoUseTermAgreement: boolean;
  isInfoTermAgreement: boolean;
  isUseTermAgreement: boolean;
  phoneNumber: string;
}

const initialState: IState = {
  isTotalTermAgreement: false,
  isInfoUseTermAgreement: false,
  isInfoTermAgreement: false,
  isUseTermAgreement: false,
  phoneNumber: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    clickTotalAgreement: (state) => {
      if (state.isTotalTermAgreement) {
        state.isTotalTermAgreement = false;
        state.isInfoUseTermAgreement = false;
        state.isInfoTermAgreement = false;
        state.isUseTermAgreement = false;
      } else {
        state.isTotalTermAgreement = true;
        state.isInfoUseTermAgreement = true;
        state.isInfoTermAgreement = true;
        state.isUseTermAgreement = true;
      }
    },
    clickInfoUseTermAgreement: (state) => {
      state.isInfoUseTermAgreement = !state.isInfoUseTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    clickInfoTermAgreement: (state) => {
      state.isInfoTermAgreement = !state.isInfoTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    clickUseTermAgreement: (state) => {
      state.isUseTermAgreement = !state.isUseTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    setPhoneNumber: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>['target']>,
    ) => {
      const { value } = action.payload;
      state.phoneNumber = value;
    },
    connectUserAndDealerAsync: (state, action: PayloadAction<any>) => {},
  },
});

function* connectUserAndDealerSaga(action: PayloadAction<any>) {
  const { dealerId, phoneNumber, recommendId, surveyToken } = action.payload;

  const data = yield api.connectUserAndDealer(
    surveyToken,
    recommendId,
    phoneNumber,
    dealerId,
  );
  console.log(data);
  yield put(appActions.showDealerMatchedModal());

  // const surveyToken = action.payload;
  // const tendencyData = yield api.analyzeUserTendency(surveyToken);
  // const recomData = yield api.analyzeUserRecommendation(surveyToken);
  // yield put(actions.connectUserAndDealerAsync({
  // }));
}

export function* authSaga() {
  yield takeLatest(actions.connectUserAndDealerAsync, connectUserAndDealerSaga);
}

export const actions = authSlice.actions;
export default authSlice.reducer;
