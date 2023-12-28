import { configureStore } from "@reduxjs/toolkit";
import { airtmSlice } from "./Slice";
const Store = configureStore({
  reducer: { airtmSlice },
});

export default Store;
