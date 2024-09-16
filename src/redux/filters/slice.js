import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filters",
    initialState: {
        text: "",
    },
    reducers: {
        setFilter(state, action) {
            state.text = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;