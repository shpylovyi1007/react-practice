import { createSlice } from "@reduxjs/toolkit";

const initValues = "";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: initValues,
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;