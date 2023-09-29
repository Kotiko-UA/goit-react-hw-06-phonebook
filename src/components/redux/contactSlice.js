import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [];

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    delContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
};
export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlicer.reducer
);

export const { addContact, delContact } = contactsSlicer.actions;

export const contacts = state => state.contacts;
