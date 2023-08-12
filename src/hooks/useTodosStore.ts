import { useAppDispatch, useAppSelector } from "./useStore"
import { Todo } from "../types"
import { addNewTodo } from "../store/todos"

export const useTodosStore = () => {
    const { todos } = useAppSelector(store => store.todosList)
    const dispatch = useAppDispatch()

    console.log(todos)

    const onAddNewTodo = (todo: Todo) => {
        dispatch(addNewTodo(todo))
    }

    return {
        todos,
        onAddNewTodo
    }
}