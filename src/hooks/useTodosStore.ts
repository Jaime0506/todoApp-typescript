import { useAppDispatch, useAppSelector } from "./useStore"
import { addNewTodo, setActiveTodo, updateTodo } from "../store/todos"
import { v4 as uuidv4 } from 'uuid'

import { Todo } from "../types"

export const useTodosStore = () => {
    const { todos, activeTodo } = useAppSelector(store => store.todosList)
    const dispatch = useAppDispatch()

    const onAddNewTodo = (todo: Todo) => {
        todo.id = uuidv4()
        dispatch(addNewTodo(todo))
    }

    const onUpdateTodo = (todo: Todo) => {
        dispatch(updateTodo(todo))
    }

    const onSetActiveTodo = (todo: Todo) => {
        dispatch(setActiveTodo(todo))
    }

    return {
        todos,
        activeTodo,

        onAddNewTodo,
        onUpdateTodo,
        onSetActiveTodo
    }
}