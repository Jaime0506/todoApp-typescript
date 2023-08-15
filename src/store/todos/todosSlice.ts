import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../../types";

interface TodosState {
    todos: Todo[]
    activeTodo: Todo | null
}

const initialState: TodosState = {
    todos: [],
    activeTodo: null
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addNewTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },

        updateTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    const newTodo = {...action.payload }

                    return newTodo
                }

                return todo
            })
        },

        setActiveTodo: (state, action: PayloadAction<Todo>) => {
            state.activeTodo = {...action.payload }
        }
        // deleteTodo: (state, action: PayloadAction<Todo>) => {

        // }
    },
});

export const { addNewTodo, updateTodo, setActiveTodo } = todosSlice.actions;
