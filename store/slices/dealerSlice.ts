import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { actions as appActions } from './appSlice';
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
  },
});

function* findDealerSaga(action: PayloadAction<any>) {
  // const surveyToken = action.payload;
  // const data = yield api.getUserTendency(surveyToken);
  // yield put(actions.saveUserTendency(data));
  yield put(appActions.showDealerMatchingModal());
  yield delay(5000);
}

/* sagas */
export function* dealerSaga() {
  yield takeLatest(actions.findDealerAsync, findDealerSaga);
}

export const actions = dealerSlice.actions;
export default dealerSlice.reducer;
