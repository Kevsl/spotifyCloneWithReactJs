import { configureStore } from "@reduxjs/toolkit";
import search from "./search";

export default configureStore({
  reducer: {
    search,
  },
});
