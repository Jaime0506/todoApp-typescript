import { AnimatePresence } from "framer-motion";
import { Todo } from "../../types";
import { TodoItem } from ".";

interface Props {
    todos: Todo[];
    isLoading: boolean
}

export const TodoList = ({ todos, isLoading }: Props) => {
    return (
        <>
            {!isLoading && (
                <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
                    <AnimatePresence>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </AnimatePresence>
                </section>
            )}
        </>
    );
};
