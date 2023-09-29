import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './filterSlice';
import { persistedContactReducer } from './contactSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
