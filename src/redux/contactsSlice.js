import { createSlice } from "@reduxjs/toolkit";
import initValues from "../contact.json";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initValues,
  },
  reducers: {
    addContact: {
      reducer({ items }, action) {
        items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { name, id: nanoid(), number },
        };
      },
    },
    delateContact({ items }, { payload }) {
      const id = items.findIndex(({ id }) => id === payload);
      items.splice(id, 1);
    },
  },
});
export const selectContacts = (state) => state.contacts.items;

export const { addContact, delateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;