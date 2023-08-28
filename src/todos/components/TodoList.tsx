import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Todo } from "../../types";
import { TodoItem } from ".";

// import { Divider } from "@nextui-org/react";

interface Props {
    todos: Todo[];
    type: "completed" | "unfilled";
}

export const TodoList = ({ todos, type }: Props) => {
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
        <div className="flex flex-col gap-3">
            <AnimatePresence>
                {todosFiltered.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} type={type} />
                ))}
            </AnimatePresence>
        </div>
    );
};
