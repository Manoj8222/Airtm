import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  last: false,
};

const airtmSlice = createSlice({
  name: "airtm",
  initialState,
  reducers: {
    setlast: (state) => {
      state.last = !state.last;
    },
  },
});

export const { setlast } = airtmSlice.actions;

export default airtmSlice.reducer;