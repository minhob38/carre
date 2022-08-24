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
