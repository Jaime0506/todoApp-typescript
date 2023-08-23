import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../types";

interface TodosState {
    todos: Todo[]
    activeTodo: Todo | null
    isLoading: boolean
    isSaving: boolean
}

const initialState: TodosState = {
    todos: [],
    activeTodo: null,
    isLoading: false,
    isSaving: false
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addNewTodo: (state, action: PayloadAction<Todo>) => {
            state.isSaving = false
            state.todos.unshift(action.payload);
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
        },

        clearTodos: (state) => {
            state.todos = []
            state.activeTodo = null
        },

        deleteTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter((todo) =>  todo.id !== action.payload.id)
        },

        loadingTodos: (state, action: PayloadAction<Todo[]>) => {
            state.isLoading = false
            state.todos = action.payload
        },

        setIsLoaded: (state) => {
            state.isLoading = true
        },
        
        setIsSavingTodo: (state) => {
            state.isSaving = true
        }
    },
});

export const { addNewTodo, updateTodo, setActiveTodo, deleteTodo, clearTodos, loadingTodos, setIsLoaded, setIsSavingTodo } = todosSlice.actions;
