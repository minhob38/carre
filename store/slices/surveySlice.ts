import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';

interface IState {
  surveyToken: string | null;
  surveyQuestions:
    | {
        firstQuestionFactorElement: string;
        firstQuestionImageFileName: string;
        firstQuestionImagePath: string;
        ordering: 3;
        secondQuestionFactorElement: string;
        secondQuestionImageFileName: string;
        secondQuestionImagePath: string;
        surveyName: string;
        surveyQuestionTitle: string;
        surveyQuestionToken: string;
        surveyToken: string;
      }[]
    | null;
}

/* slices */
const initialState: IState = {
  surveyToken: null,
  surveyQuestions: null,
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

    bindSurveyAsync: (
      state,
      action: PayloadAction<{ surveyToken: string; input: IInput }>,
    ) => {
      return;
    },
    checkBindSurvey: (state, action: PayloadAction<void>) => {},

    getSurveyQuestionsAsync: (state, action: PayloadAction<string>) => {
      return;
    },
    saveSurveyQuestions: (state, action: PayloadAction<any>) => {
      const surveyQuestions = action.payload;
      state.surveyQuestions = surveyQuestions;
    },
  },
});

/* sagas */
function* createSurveyTokenSaga(action) {
  const data = yield api.createSurveyToken();
  const userSurveyToken = data.userSurveyToken;
  yield put(actions.saveSurveyToken(userSurveyToken));
}

function* bindSurveySaga(
  action: PayloadAction<{ surveyToken: string; input: IInput }>,
) {
  const { surveyToken, input } = action.payload;
  yield api.bindSurvey(surveyToken, input);
  yield put(actions.checkBindSurvey());
}

function* getSurveyQuestionsSaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.getSurveyQuestions(surveyToken);
  yield put(actions.saveSurveyQuestions(data));
}

export function* surveySaga() {
  yield takeLatest(actions.createSurveyTokenAsync, createSurveyTokenSaga);
  yield takeLatest(actions.bindSurveyAsync, bindSurveySaga);
  yield takeLatest(actions.getSurveyQuestionsAsync, getSurveyQuestionsSaga);
}

export const actions = surveySlice.actions;
export default surveySlice.reducer;
