import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../redux/features/PostSlice";
import BookReducer from "../redux/features/BookSlice";

export default configureStore({
  reducer: {
    app: PostReducer,
    app1: BookReducer
  },
});
