import { addNewTodo, clearTodos, setActiveTodo, updateTodo } from ".";
import { AppDispatch, RootState } from "..";
import { supabase } from "../../supabase";
import type { Todo } from "../../types";

export const onAddNewTodo = (todo: Todo) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const { uid } = getState().auth

        const { error } = await supabase.from("todos").insert({
            id: todo.id,
            title: todo.title,
            done: todo.done,
            create_by: uid,
            create_at: todo.start
        });

        if (error) return console.log(error)

        dispatch(addNewTodo(todo));
    };
};

export const onUpdateTodo = (todo: Todo) => {
    return async (dispatch: AppDispatch) => {
        const { error } = await supabase.from('todos').update({
            title: todo.title,
            done: todo.done,
        }).eq('id', todo.id)
        
        if (error) return console.log(error)

        dispatch(updateTodo(todo));
    };
};

export const onSetActiveTodo = (todo: Todo) => {
    return (dispatch: AppDispatch) => {
        dispatch(setActiveTodo(todo));
    };
};

export const onClearTodos = () => {
    return (dispatch: AppDispatch) => {
        dispatch(clearTodos());
    };
};