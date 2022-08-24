import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as api from '@apis/api';

interface IState {
  surveyToken: string | null;
}

/* slices */
const initialState: IState = {
  surveyToken: null,
};

// https://redux-toolkit.js.org/api/createSlice
const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    createSurveyTokenAsync: (state, action: PayloadAction) => {
      return;
    },
    saveSurveyToken: (state, action: PayloadAction<string>) => {
      const userSurveyToken = action.payload;
      state.surveyToken = userSurveyToken;
    },

    bindSurveyAsync: (state, action: PayloadAction<string>) => {
      return;
    },
    checkBindSurvey: (state, action: PayloadAction<void>) => {},
  },
});

/* sagas */
function* createSurveyTokenSaga(action) {
  const data = yield api.createSurveyToken();
  const userSurveyToken = data.userSurveyToken;
  yield put(actions.saveSurveyToken(userSurveyToken));
}

function* bindSurveySaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  yield api.bindSurvey(surveyToken);
  yield put(actions.checkBindSurvey());
}

export function* surveySaga() {
  yield takeLatest(actions.createSurveyTokenAsync, createSurveyTokenSaga);
  yield takeLatest(actions.bindSurveyAsync, bindSurveySaga);
}

export const actions = surveySlice.actions;
export default surveySlice.reducer;
