import axios from '@configs/axios-config';
import { IResponse, TError } from '@type/axios';
import { IInput } from '@type/input';
import * as ERRORS from '@constants/errors';

/**
 * error 발생하면, axios-config.ts instance.interceptors.response.use에서 error를 처리하여 return을 함
 */

export const createSurveyToken = async () => {
  const response = await axios
    .post<IResponse>('/user-surveys/create', {
      surveyToken: 'svy_yA6e2ate403kY2Wb',
      userId: '123',
      userSurveyName: 'user servery name',
    })
    .then((res) => res.data);
  return response.data;
};

export const bindSurvey = async (surveyToken: string, input: IInput) => {
  const {
    birthYear,
    gender,
    carUsagePurpose,
    userBudget,
    userBudgetMin,
    userBudgetMax,
    passengerCount,
    drivenDistanceInYear,
    isWantSimilarPriceCar,
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
      isWantSimilarPriceCar,
    })
    .then((res) => res.data);
  return response.data;
};

export const getSurveyQuestions = async (surveyToken: string) => {
  const response = await axios
    .get<IResponse>(`/user-surveys/${surveyToken}/questions`)
    .then((res) => res.data);
  return response.data;
};

export const saveSurveyAnswers = async (surveyToken: string, surveyInput) => {
  const response = await axios
    .post<IResponse>(
      `/user-surveys/${surveyToken}/take-input-survey-answer`,
      surveyInput,
    )
    .then((res) => res.data);
  return response.data;
};

export const analyzeUserTendency = async (surveyToken: string) => {
  const response = await axios
    .post<IResponse>(
      `/user-surveys/${surveyToken}/calculate-user-survey-factor`,
    )
    .then((res) => res.data);
  return response.data;
};

export const getUserTendency = async (surveyToken: string) => {
  const response = await axios
    .get<IResponse>(`/user-surveys/${surveyToken}/user-survey-factor`)
    .then((res) => res.data);
  return response.data;
};

export const analyzeUserRecommendation = async (surveyToken: string) => {
  const response = await axios
    .post<IResponse>(`/recommends/user-survey/${surveyToken}`)
    .then((res) => res.data);
  return response.data;
};

export const getUserRecommendation = async (recommendationId: string) => {
  const response = await axios
    .get<IResponse>(`/recommends/${recommendationId}`)
    .then((res) => res.data);
  return response.data;
};

export const connectUserAndDealer = async (
  surveyToken: string,
  recommendId: string,
  phoneNumber: string,
  dealerId: string,
) => {
  const response = await axios
    .post<IResponse>(`/dealers/connect-user`, {
      dealerId,
      userSurveyToken: surveyToken,
      userPhoneNumber: phoneNumber,
      recommendToken: recommendId,
    })
    .then((res) => res.data);
  return response.data;
};

export const getLadningRecommendation = async (aprUrl: string) => {
  const response = await axios
    .get<IResponse>(`${aprUrl}`)
    .then((res) => res.data);
  return response.data;
};
