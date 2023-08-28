import { useEffect } from "react";
import { Button, Divider } from "@nextui-org/react";

import { Form, LoadingTodoSkeleton, TodoList } from "../components";
import { useTodosStore, useAuthStore } from "../../hooks";

export const TodoPage = () => {
    const {
        todos,
        isLoading,
        isSaving,
        handleOnClearTodos,
        handleOnLoadingTodos,
    } = useTodosStore();
    const { handleOnLogout, uid } = useAuthStore();

    useEffect(() => {
        handleOnLoadingTodos(uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        handleOnLogout();
        handleOnClearTodos();
    };

    return (
        <main className="mx-auto bg-zinc-200 min-h-screen flex flex-col justify-center items-center pt-20 pb-20">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg transition-height">
                <section className="bg-slate-300 p-4 rounded-t-md container flex flex-row justify-between items-center">
                    <h1 className="font-mono font-bold text-2xl">
                        Todo App 👌
                    </h1>
                    <Button
                        color="danger"
                        variant="shadow"
                        className="hover:bg-rose-700"
                        onClick={handleLogout}
                    >
                        Sign Out
                    </Button>
                </section>
                <Form />
                <LoadingTodoSkeleton show={isLoading} />
                <LoadingTodoSkeleton show={isSaving} />

                {!isLoading && (
                    <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
                        <p className="font-semibold text-sm text-gray-400">
                            Unfilled
                        </p>

                        <div className="flex flex-col gap-3">
                            <TodoList
                                todos={todos}
                                isLoading={isLoading}
                                type="unfilled"
                            />
                        </div>
                        <Divider className="my-2" />
                        <p className="font-semibold text-sm text-gray-400">
                            Completed
                        </p>

                        <div className="flex flex-col gap-3">
                            <TodoList
                                todos={todos}
                                isLoading={isLoading}
                                type="completed"
                            />
                        </div>
                    </section>
                )}
                <footer className="p-4 pt-0 w-full d-flex  ">
                    <div className="bg-gray-300 p-2 rounded-md">
                        <p className="text-gray-400 text-sm">
                            Completed tasks are deleted in 3 hours{" "}
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
};
