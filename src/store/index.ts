import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import questReducer, { questReducerInitialState } from './questReducer';
import thunk from 'redux-thunk';
import { createAPI } from '../services/api';

const api = createAPI();

const store = createStore(
  questReducer,
  questReducerInitialState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

export default store;
