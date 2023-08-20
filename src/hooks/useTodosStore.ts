import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch, useAppSelector } from "./useStore"
import { onAddNewTodo, onClearTodos, onDeleteTodo, onLoadingTodos, onSetActiveTodo, onUpdateTodo } from "../store/todos/thunks"

import type { Todo } from "../types"

export const useTodosStore = () => {
    const { todos, activeTodo, isLoaded } = useAppSelector(store => store.todosList)
    const dispatch = useAppDispatch()

    const handleOnNewTodo = (todo: Todo) => {
        todo.id = uuidv4()
        todo.start = new Date().getTime()

        dispatch(onAddNewTodo(todo))
    }

    const handleOnUpdateTodo = (todo: Todo) => {
        dispatch(onUpdateTodo(todo))
    }

    const handleOnDeleteTodo = (todo: Todo) => {
        dispatch(onDeleteTodo(todo))
    }

    const handleOnSetActiveTodo = (todo: Todo) => {
        dispatch(onSetActiveTodo(todo))
    }

    const handleOnClearTodos = () => {
        dispatch(onClearTodos())
    }

    const handleOnLoadingTodos = (id: string | null) => {
       dispatch(onLoadingTodos(id)) 
    }

    return {
        todos,
        activeTodo,
        isLoaded,

        handleOnNewTodo,
        handleOnUpdateTodo,
        handleOnDeleteTodo,
        handleOnSetActiveTodo,
        handleOnClearTodos,
        handleOnLoadingTodos
    }
}