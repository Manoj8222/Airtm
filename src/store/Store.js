import { configureStore } from "@reduxjs/toolkit";
import airtmReducer from "./Slice";
const Store = configureStore({
  reducer: {
    airtm: airtmReducer,
  },
});

export default Store;
