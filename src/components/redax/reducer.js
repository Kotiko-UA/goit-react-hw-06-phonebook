import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [];
const initialFilters = '';

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          contacts: {
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

export const filterSlicer = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    filterStatus(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { addContact, delContact } = contactsSlicer.actions;
export const contactsReducer = contactsSlicer.reducer;
export const { filterStatus } = filterSlicer.reducer;
export const filterReducer = filterSlicer.reducer;
