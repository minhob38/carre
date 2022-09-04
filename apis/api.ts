import axios from '@configs/axios-config';
import { IResponse, TError } from '@type/axios';
import { IInput } from '@type/input';

/**
 * error 발생하면, axios-config.ts instance.interceptors.response.use에서 error를 처리하여 return을 함
 */

export const createSurveyToken = async () => {
  try {
    const response = await axios
      .post<IResponse>('/user-surveys/create', {
        surveyToken: 'svy_yA6e2ate403kY2Wb',
        userId: '123',
        userSurveyName: 'user servery name',
      })
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const bindSurvey = async (surveyToken: string, input: IInput) => {
  try {
    const {
      birthYear,
      gender,
      carUsagePurpose,
      userBudget,
      userBudgetMin,
      userBudgetMax,
      passengerCount,
      drivenDistanceInYear,
    } = input;
    const response = await axios
      .post<IResponse>(`/user-surveys/${surveyToken}/binding-init-info`, {
        // TODO: input값으로 넣어주기
        birthYear,
        gender,
        carUsagePurpose,
        // userBudgetMin,
        // userBudgetMax,
        userBudget,
        passengerCount,
        drivenDistanceInYear,
      })
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const getSurveyQuestions = async (surveyToken: string) => {
  try {
    const response = await axios
      .get<IResponse>(`/user-surveys/${surveyToken}/questions`)
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const saveSurveyAnswers = async (surveyToken: string, surveyInput) => {
  try {
    const response = await axios
      .post<IResponse>(
        `/user-surveys/${surveyToken}/take-input-survey-answer`,
        surveyInput,
      )
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const analyzeUserTendency = async (surveyToken: string) => {
  try {
    const response = await axios
      .post<IResponse>(
        `/user-surveys/${surveyToken}/calculate-user-survey-factor`,
      )
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const getUserTendency = async (surveyToken: string) => {
  try {
    const response = await axios
      .get<IResponse>(`/user-surveys/${surveyToken}/user-survey-factor`)
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const analyzeUserRecommendation = async (surveyToken: string) => {
  try {
    const response = await axios
      .post<IResponse>(`/recommends/user-survey/${surveyToken}`)
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};

export const getUserRecommendation = async (recommendationId: string) => {
  try {
    const response = await axios
      .get<IResponse>(`/recommends/${recommendationId}`)
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};
