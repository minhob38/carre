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
