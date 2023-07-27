import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import drawerReducer from './features/drawer-slice';
import searchReducer from './features/search.slice';

export const store = configureStore({
   reducer: {
      drawerReducer,
      searchReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
