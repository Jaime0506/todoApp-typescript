import { Button } from "@nextui-org/react";

import { Form, TodoList } from "../components";
import { useAppDispatch, useTodosStore } from "../../hooks";
import { onLogout } from "../../store/auth/thunks";

export const TodoPage = () => {

    const { todos, onAddNewTodo } = useTodosStore();
    const dispatch = useAppDispatch()
    
    const handleLogout = () => {
        dispatch(onLogout())
    }

    return (
        <main className="mx-auto bg-zinc-200 min-h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
                <section className="bg-slate-300 p-4 rounded-t-md container flex flex-row justify-between items-center">
                    <h1 className="font-mono font-bold text-2xl">
                        Todo App 👌
                    </h1>
                    <Button color="danger" variant="shadow" className="hover:bg-rose-700" onClick={handleLogout}>
                        Sing Out
                    </Button>
                </section>

                <Form onNewTodo={onAddNewTodo} />
                <TodoList todos={todos} />
            </div>
        </main>
    );
};
