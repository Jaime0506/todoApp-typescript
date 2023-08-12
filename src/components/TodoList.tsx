import { AnimatePresence } from "framer-motion";
import { Todo } from "../types";
import { TodoItem } from "./";

interface TodoListProps {
    todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
    return (
        <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
            <AnimatePresence>
                { todos.map((todo) => <TodoItem key={todo.title} todo={todo} />)}
            </AnimatePresence>
        </section>
    );
};