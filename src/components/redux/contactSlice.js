import { createSlice, nanoid } from '@reduxjs/toolkit';

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

export const { addContact, delContact } = contactsSlicer.actions;
export const contactsReducer = contactsSlicer.reducer;
