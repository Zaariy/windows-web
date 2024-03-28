//File Path =>  Services/c_ui_structure  

import { configureStore } from "@reduxjs/toolkit";
import windowSettings from "./windowUiStructure" ;
import FileSysSlice from "./windowsFileSys/index";



export const store =  configureStore({
  reducer : {
    windowSettings : windowSettings ,
    fileSysSlice : FileSysSlice,
  },
  // prevent an error
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState =  ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

