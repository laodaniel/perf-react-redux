import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export default (preloadedState) => configureStore({
  reducer,
  preloadedState
});