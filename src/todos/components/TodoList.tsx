import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Todo } from "../../types";
import { TodoItem } from ".";

// import { Divider } from "@nextui-org/react";

interface Props {
    todos: Todo[];
    isLoading: boolean;
    type: "completed" | "unfilled";
}

export const TodoList = ({ todos, isLoading, type }: Props) => {
    const [todosFiltered, setTodosFiltered] = useState<Todo[]>([]);

    useEffect(() => {
        if (type === "completed") {
            const tempTodos = todos.filter((todo) => todo.done === true);

            setTodosFiltered(tempTodos);
        }

        if (type === "unfilled") {
            const tempTodos = todos.filter((todo) => todo.done === false);

            setTodosFiltered(tempTodos);
        }
    }, [todos, type]);

    return (
        <>
            {!isLoading && (
                <AnimatePresence>
                    {todosFiltered.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} type={type} />
                    ))}
                </AnimatePresence>
            )}
        </>
    );
};
