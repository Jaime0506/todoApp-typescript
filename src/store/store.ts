import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        todosList: todosSlice.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch