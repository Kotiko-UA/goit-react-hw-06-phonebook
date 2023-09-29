import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
