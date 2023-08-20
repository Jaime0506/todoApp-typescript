import { motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { useTodosStore } from "../../hooks";

import type { Todo } from "../../types";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    
    const { handleOnSetActiveTodo, handleOnDeleteTodo } = useTodosStore()

    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0,
                position: "relative",
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 240,
                damping: 13,
            }}
            className="flex flex-row justify-between items-center gap-3"
        >
            <Checkbox
                color="success"
                radius="full"
                lineThrough
            >
                {todo.title.length > 20
                    ? todo.title.substring(0, 20) + "..."
                    : todo.title}
            </Checkbox>
            <div className="flex flex-row gap-2">
                <FontAwesomeIcon
                    icon={icon(faPenToSquare)}
                    className="text-gray-600 hover:cursor-pointer"
                    onClick={() => handleOnSetActiveTodo(todo)}
                />
                <FontAwesomeIcon
                    icon={icon(faTrashCan)}
                    className="text-red-500 hover:cursor-pointer"
                    onClick={() => handleOnDeleteTodo(todo)}
                />
            </div>
        </motion.div>
    );
};
