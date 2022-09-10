import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IInput } from '@type/input';
import * as api from '@apis/api';
import { actions as resultActions } from './resultSlice';
import { actions as errorActions } from './errorSlice';

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
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
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
  },
});

/* sagas */
function* createSurveyTokenSaga(action) {
  try {
    const data = yield api.createSurveyToken();
    yield put(errorActions.setNormal());
    const userSurveyToken = data.userSurveyToken;
    yield put(actions.saveSurveyToken(userSurveyToken));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

/**
 * 나의정보를 기반으로 설문 set을 생성(bind)하는 api 호출
 */
function* bindSurveySaga(
  action: PayloadAction<{ surveyToken: string; input: IInput }>,
) {
  try {
    const { surveyToken, input } = action.payload;
    yield api.bindSurvey(surveyToken, input);
    yield put(errorActions.setNormal());
    yield put(actions.checkBindSurvey());
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

/**
 * 설문을 조회하는 api 호출
 */
function* getSurveyQuestionsSaga(action: PayloadAction<string>) {
  try {
    const surveyToken = action.payload;
    const data = yield api.getSurveyQuestions(surveyToken);
    yield put(errorActions.setNormal());
    yield put(actions.saveSurveyQuestions(data));
  } catch (err) {
    yield put(errorActions.setServerError());
  }
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
  // TODO: analyzeSurveyAnswersAsync는 따로 처리해야함...
  yield put(actions.analyzeSurveyAnswersAsync(surveyToken));
}

/**
 * 서버에 저장한 나의정보 및 설문을 기반으로, 사용자성향/추천차량을 계산하는 api 호출
 * 사용자성향/추천차량 계산 후, 사용자성향/추천차량 조회api 호출 (따로따로 dispatch하면, 추천차량 계산 전에 조회를 해서 데이터가 비어있음 : (
 */
function* analyzeSurveyAnswersSaga(action: PayloadAction<string>) {
  try {
    const surveyToken = action.payload;
    const tendencyData = yield api.analyzeUserTendency(surveyToken);
    const recomData = yield api.analyzeUserRecommendation(surveyToken);
    yield put(errorActions.setNormal());
    yield put(resultActions.getUserTendencyAsync(surveyToken));
    yield put(resultActions.getUserRecomAsync(recomData));
    yield put(actions.checkSurveyAnswerAnalysis());
  } catch (err) {
    yield put(errorActions.setServerError());
  }
}

export function* surveySaga() {
  yield takeLatest(actions.createSurveyTokenAsync, createSurveyTokenSaga);
  yield takeLatest(actions.bindSurveyAsync, bindSurveySaga);
  yield takeLatest(actions.getSurveyQuestionsAsync, getSurveyQuestionsSaga);
  yield takeLatest(actions.saveSurveyAnswersAsync, saveSurveyAnswersSaga);
  yield takeLatest(actions.analyzeSurveyAnswersAsync, analyzeSurveyAnswersSaga);
}

export const actions = surveySlice.actions;
export default surveySlice.reducer;
