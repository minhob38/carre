import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './slices/appSlice';
import { appSaga } from './slices/appSlice';

import errorReducer from './slices/errorSlice';
import { errorSaga } from './slices/errorSlice';

import inputReducer from './slices/inputSlice';

import surveyReducer from './slices/surveySlice';
import { surveySaga } from './slices/surveySlice';

import resultReducer from './slices/resultSlice';
import { resultSaga } from './slices/resultSlice';

import dealerReudcer from './slices/dealerSlice';
import { dealerSaga } from './slices/dealerSlice';

import authReducer from './slices/authSlice';
import { authSaga } from './slices/authSlice';

export function* rootSaga() {
  yield all([
    appSaga(),
    errorSaga(),
    authSaga(),
    surveySaga(),
    resultSaga(),
    dealerSaga(),
  ]);
}
const sagaMiddleware = createSagaMiddleware();
const middleware: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// combine으로 합치지 않아도 됩니다. (코드정리를 위해 rootReducer로 묶었습니다.)
const rootReducer = combineReducers({
  appReducer,
  errorReducer,
  authReducer,
  inputReducer,
  surveyReducer,
  resultReducer,
  dealerReudcer,
});

const persistConfig = { key: 'root', version: 1, storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { rootReducer: persistedReducer },
  middleware,
});

const createStore = () => store;

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(createStore);
export const persistor = persistStore(store);
