import { Divider } from "@nextui-org/react";
import { TodoList } from ".";
import { useTodosStore } from "../../hooks";


export const Todos = () => {

    const { todos, isLoading } = useTodosStore()

    return (
        <>
            {!isLoading && (
                <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
                    <p className="font-semibold text-sm text-gray-400">Unfilled</p>
                    <TodoList todos={todos} type="unfilled" />

                    <Divider className="my-2" />

                    <p className="font-semibold text-sm text-gray-400">Completed</p>
                    <TodoList todos={todos} type="completed" />
                </section>
            )}
        </>
    );
};
