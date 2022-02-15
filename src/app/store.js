import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import initState from './initState';

const middleware = applyMiddleware(thunk);



function configureStore(state = {}) {

  return createStore(rootReducer, state, middleware);
}
export const store = configureStore();
