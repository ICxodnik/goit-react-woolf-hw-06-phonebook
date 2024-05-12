import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook.slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'phoneBook',
  whitelist: ['contacts'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
