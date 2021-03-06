import request from 'axios';
import { HTTP_CODE } from '../const';
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { setErrorAction } from '../store/client-process/client-process';
import { ErrorType } from '../types/error';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setErrorAction(message));
    store.dispatch(clearErrorAction());
  };

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
