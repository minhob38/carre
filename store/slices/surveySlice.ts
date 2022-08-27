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

    saveSurveyAnswersAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    checkSaveSurveyAnswer: (state, action: PayloadAction<void>) => {},

    analyzeSurveyAnswersAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    checkSurveyAnswerAnalysis: (state, action: PayloadAction<void>) => {},

    getRecommendationAsync: (state, action: PayloadAction<any>) => {
      return;
    },
    saveRecommendation: (state, action: PayloadAction<void>) => {},
  },
});

/* sagas */
function* createSurveyTokenSaga(action) {
  const data = yield api.createSurveyToken();
  const userSurveyToken = data.userSurveyToken;
  yield put(actions.saveSurveyToken(userSurveyToken));
}

/**
 * 나의정보를 기반으로 설문 set을 생성(bind)하는 api 호출
 */
function* bindSurveySaga(
  action: PayloadAction<{ surveyToken: string; input: IInput }>,
) {
  const { surveyToken, input } = action.payload;
  yield api.bindSurvey(surveyToken, input);
  yield put(actions.checkBindSurvey());
}

/**
 * 설문을 조회하는 api 호출
 */
function* getSurveyQuestionsSaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.getSurveyQuestions(surveyToken);
  yield put(actions.saveSurveyQuestions(data));
}

/**
 * 설문조사를 저장하는 api 호출
 */
function* saveSurveyAnswersSaga(
  action: PayloadAction<{
    surveyToken: string;
    surveyQuestions: Record<string, string>[];
    surveyAnswers: Record<string, string>;
  }>,
) {
  const { surveyToken, surveyQuestions, surveyAnswers } = action.payload;

  const surveyInput = surveyQuestions.map((question) => {
    const {
      surveyQuestionToken,
      firstQuestionFactorElement,
      secondQuestionFactorElement,
    } = question;
    const userChoiceFactorElement = surveyAnswers[surveyQuestionToken];
    return {
      surveyQuestionToken,
      firstQuestionFactorElement,
      secondQuestionFactorElement,
      userChoiceFactorElement,
    };
  });
  const data = yield api.saveSurveyAnswers(surveyToken, surveyInput);
  yield put(actions.checkSaveSurveyAnswer());
}

/**
 * 서버에 저장한 나의정보 및 설문을 기반으로, 추천차량을 계산하는 api 호출
 * 추천차량 계산 후, 추천차량 조회api 호출 (따로따로 dispatch하면, 추천차량 계산 전에 조회를 해서 데이터가 비어있음 : (
 */
function* analyzeSurveyAnswersSaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.analyzeSurveyAnswers(surveyToken);
  yield put(actions.checkSurveyAnswerAnalysis());
  yield put(actions.getRecommendationAsync(surveyToken));
}

/**
 * 추천차량을 조회 api 호출
 */
function* getRecommendationSaga(action: PayloadAction<string>) {
  const surveyToken = action.payload;
  const data = yield api.getRecommendation(surveyToken);
  yield put(actions.checkSurveyAnswerAnalysis());
}

export function* surveySaga() {
  yield takeLatest(actions.createSurveyTokenAsync, createSurveyTokenSaga);
  yield takeLatest(actions.bindSurveyAsync, bindSurveySaga);
  yield takeLatest(actions.getSurveyQuestionsAsync, getSurveyQuestionsSaga);
  yield takeLatest(actions.saveSurveyAnswersAsync, saveSurveyAnswersSaga);
  yield takeLatest(actions.analyzeSurveyAnswersAsync, analyzeSurveyAnswersSaga);
  yield takeLatest(actions.getRecommendationAsync, getRecommendationSaga);
}

export const actions = surveySlice.actions;
export default surveySlice.reducer;
