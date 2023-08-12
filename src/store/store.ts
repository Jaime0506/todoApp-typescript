import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";

export const store = configureStore({
    reducer: {
        todosList: todosSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch