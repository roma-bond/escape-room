import { configureStore } from '@reduxjs/toolkit';
import questReducer from './quest-reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

const store = configureStore({
  reducer: questReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }),
});

export default store;
