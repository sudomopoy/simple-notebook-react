import { configureStore } from '@reduxjs/toolkit';
import { userReducers } from '../actions/actions';

export const store = configureStore({
  reducer: {
    user: userReducers,
  },
});
