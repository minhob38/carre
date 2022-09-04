declare module '@type/axios' {
  import { AxiosError } from 'axios';

  interface IResponse {
    result: 'SUCCESS' | 'ERROR';
    data: any;
    errorCode: any;
    message: string | null;
  }

  type TError = AxiosError;
}

declare module '@type/input' {
  interface IInput {
    birthYear: string;
    gender: string;
    carUsagePurpose: string;
    userBudget: number;
    userBudgetMin: number;
    userBudgetMax: number;
    passengerCount: number;
    drivenDistanceInYear: number;
  }
}
