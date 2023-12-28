import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  thanks: false,
};

export const airtmSlice = createSlice({
  name: "airtm",
  initialState,
  reducers: {
    setthanks: (state, action) => {
      state.thanks = action.payload;
    },
  },
});

export const { setthanks } = airtmSlice.actions;

export default airtmSlice.reducer;

// const store = configureStore({
//   reducer: {airtmSlice.reducer},
// });

// export default store;
