import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
// ...

export const store = configureStore({
  reducer: {
    productSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* 3) REDUX-TOOLKIT (Dành cho TS): https://redux-toolkit.js.org/introduction/getting-started => TypeScript Quick Start
Terminal: npm install @reduxjs/toolkit react-redux  
Trong thư mục src -> Tạo thư mục redux:
  - Tạo file store.ts -> Copy & Paste code trong "Define Root State and Dispatch Types"
  - Tạo file hooks.ts -> Copy & Paste code trong "Define Typed Hooks" */
