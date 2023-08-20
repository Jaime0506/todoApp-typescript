import { useEffect } from "react";
import { Button, Skeleton } from "@nextui-org/react";

import { Form, TodoList } from "../components";
import { useTodosStore, useAuthStore } from "../../hooks";

export const TodoPage = () => {
    const { todos, isLoaded, handleOnClearTodos, handleOnLoadingTodos } =
        useTodosStore();
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
            <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
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
                {!isLoaded && (
                    <section className="container pl-5 pb-5 pr-5 flex flex-row gap-3 items-center justify-center">
                        <div className="w-full flex flex-row gap-2">
                            <div className="flex flex-row w-full gap-2">
                                <Skeleton
                                    isLoaded={isLoaded}
                                    className="w-5 rounded-full"
                                >
                                    <div className="h-5 w-full rounded-full bg-secondary"></div>
                                </Skeleton>

                                <Skeleton
                                    isLoaded={isLoaded}
                                    className="w-3/5 rounded-lg"
                                >
                                    <div className="h-5 w-full rounded-lg bg-secondary"></div>
                                </Skeleton>
                            </div>
                            <Skeleton
                                isLoaded={isLoaded}
                                className="w-12 rounded-full"
                            >
                                <div className="h-5 w-full rounded-full bg-secondary"></div>
                            </Skeleton>
                        </div>
                    </section>
                )}
                { isLoaded && <TodoList todos={todos} />}
            </div>
        </main>
    );
};
