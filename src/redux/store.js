import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import createSageMiddleware from 'redux-saga'
import rootSaga from './sagas'

const saga = createSageMiddleware();

const middleware = [saga, logger];


export const store = createStore(rootReducer, applyMiddleware(...middleware));
saga.run(rootSaga);