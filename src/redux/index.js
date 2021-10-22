import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './root-reducer';

const persistConfig = {
  key: 'persistedSlice',
  storage: storage,
  whitelist: ['persistedSlice'],
};

const persistedSlice = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedSlice,
  composeWithDevTools
});

const persistor = persistStore(store);

export { store, persistor };
