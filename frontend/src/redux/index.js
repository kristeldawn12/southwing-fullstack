import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice.js";
import productSliceReducer from "./productSlice.js";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,
  },
});
