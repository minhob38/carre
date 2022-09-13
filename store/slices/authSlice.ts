import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as api from '@apis/api';
import { actions as appActions } from './appSlice';
import { actions as errorActions } from './errorSlice';

interface IState {
  isTotalTermAgreement: boolean; // 전체동의
  isInfoSaveTermAgreement: boolean; // 개인정보 수집 동의
  isInfoProvAgreement: boolean; // 3자 제공
  // isUseTermAgreement: boolean;
  phoneNumber: string;
}

const initialState: IState = {
  isTotalTermAgreement: false,
  isInfoSaveTermAgreement: false,
  isInfoProvAgreement: false,
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
        state.isInfoSaveTermAgreement = false;
        state.isInfoProvAgreement = false;
      } else {
        state.isTotalTermAgreement = true;
        state.isInfoSaveTermAgreement = true;
        state.isInfoProvAgreement = true;
      }
    },
    clickInfoSaveTermAgreement: (state) => {
      state.isInfoSaveTermAgreement = !state.isInfoSaveTermAgreement;
      if (state.isInfoSaveTermAgreement && state.isInfoProvAgreement) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    clickInfoProvAgreement: (state) => {
      state.isInfoProvAgreement = !state.isInfoProvAgreement;
      if (state.isInfoSaveTermAgreement && state.isInfoProvAgreement) {
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
  try {
    const { dealerId, phoneNumber, recommendId, surveyToken } = action.payload;
    const data = yield api.connectUserAndDealer(
      surveyToken || 'no_survey',
      recommendId || 'recom_no_survey',
      phoneNumber,
      dealerId,
    );
    yield put(errorActions.setNormal());
    yield put(appActions.showDealerMatchedModal());
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

export function* authSaga() {
  yield takeLatest(actions.connectUserAndDealerAsync, connectUserAndDealerSaga);
}

export const actions = authSlice.actions;
export default authSlice.reducer;
