import axios from '@configs/axios-config';
import { IResponse, TError } from '@type/axios';

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

export const bindSurvey = async (surveyToken: string) => {
  try {
    const response = await axios
      .post<IResponse>(`/user-surveys/${surveyToken}/binding-init-info`, {
        // TODO: input값으로 넣어주기
        birthYear: '1982',
        gender: 'MALE',
        carUsagePurpose: 'COMMUTING',
        userBudgetMin: 5000,
        userBudgetMax: 10000,
        passengerCount: 4,
        drivenDistanceInYear: 10000,
      })
      .then((res) => res.data);
    return response.data;
  } catch (err) {
    console.log((err as TError).message);
  }
};
