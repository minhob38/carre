import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { actions as appActions } from '@store/slices/appSlice';
import { actions as authActions } from '@store/slices/dealerSlice';
import { actions as dealerActions } from '@store/slices/dealerSlice';
import { actions as errorActions } from '@store/slices/dealerSlice';
import { actions as inputActions } from '@store/slices/inputSlice';
import { actions as resultActions } from '@store/slices/resultSlice';
import { actions as surveyActions } from '@store/slices/surveySlice';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useInitialization = () => {
  const dispatch = useTypedDispatch();

  const initializeStore = () => {
    // dispatch(appActions.initialize());
    dispatch(authActions.initialize());
    dispatch(dealerActions.initialize());
    dispatch(errorActions.initialize());
    dispatch(inputActions.initialize());
    dispatch(resultActions.initialize());
    dispatch(surveyActions.initialize());
  };

  return initializeStore;
};
