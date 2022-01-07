import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import meReducer from '../slices/me/meSlice';
import authReducer from '../slices/auth/authSlice';

//configureStoreのreducerに追加するとキー名のstateが増えていることがわかる。
export const store = configureStore({
  reducer: {
    authState: authReducer,
    // meState: meReducer,
  },
});

// あとでコメントで内容をかく
export type AppDispatch = typeof store.dispatch;