import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../../types";

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addNewTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
    },
});

export const { addNewTodo } = todosSlice.actions;
