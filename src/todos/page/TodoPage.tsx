import { Button } from "@nextui-org/react";

import { Form, TodoList } from "../components";
import { useTodosStore, useAuthStore } from "../../hooks";

export const TodoPage = () => {

    const { todos, handleOnClearTodos } = useTodosStore();
    const { handleOnLogout } = useAuthStore()
    
    const handleLogout = () => {
        handleOnLogout()
        handleOnClearTodos()
    }

    return (
        <main className="mx-auto bg-zinc-200 min-h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
                <section className="bg-slate-300 p-4 rounded-t-md container flex flex-row justify-between items-center">
                    <h1 className="font-mono font-bold text-2xl">
                        Todo App 👌
                    </h1>
                    <Button color="danger" variant="shadow" className="hover:bg-rose-700" onClick={handleLogout}>
                        Sign Out
                    </Button>
                </section>

                <Form />
                <TodoList todos={todos} />
            </div>
        </main>
    );
};
