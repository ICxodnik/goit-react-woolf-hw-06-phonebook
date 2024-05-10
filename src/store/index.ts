import { combineReducers, configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook.slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const reducers = combineReducers({
  phoneBook: phoneBookReducer,
});

const persistConfig = {
  key: 'phoneBook',
  whitelist: ['phoneBook'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
