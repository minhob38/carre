import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as api from '@apis/api';

/* slices */
const initialState = {
  surveyToken: '',
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
  },
});

/* sagas */
function* createSurveyTokenSaga(action) {
  const data = yield api.createSurveyToken();
  const userSurveyToken = data.userSurveyToken;
  console.log(userSurveyToken);
  yield put(actions.saveSurveyToken(userSurveyToken));
}

export function* surveySaga() {
  yield takeLatest(actions.createSurveyTokenAsync, createSurveyTokenSaga);
}

export const actions = surveySlice.actions;
export default surveySlice.reducer;
