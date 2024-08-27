import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: "",
  search: "",
  sort: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});
export default filtersSlice.reducer;
export const { updateFilters } = filtersSlice.actions;
