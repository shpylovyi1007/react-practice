import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
import { deleteContact, fetchContacts, addContact } from "./operations";
import { selectContacts } from "./selectors";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, (state, action) => {
            state.error = false;
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(item => item.id !== action.payload.id)
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(addContact.pending, (state, action) => {
            state.error = false;
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
});


export const contactsReducer = contactsSlice.reducer;

export const selectFilterContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes((filter || '').toLowerCase())
        );
    }
);
