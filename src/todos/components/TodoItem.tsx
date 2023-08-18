// import { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

import { Todo } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useTodosStore } from "../../hooks";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    
    const { handleOnSetActiveTodo } = useTodosStore()

    const onEditTodo = () => {
        handleOnSetActiveTodo(todo)
    }

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
                // className="bg-green-500"
                lineThrough
                // onClick={}
            >
                {todo.title.length > 20
                    ? todo.title.substring(0, 20) + "..."
                    : todo.title}
            </Checkbox>
            <div className="flex flex-row gap-2">
                <FontAwesomeIcon
                    icon={icon(faPenToSquare)}
                    className="text-gray-600 hover:cursor-pointer"
                    onClick={onEditTodo}
                />
                <FontAwesomeIcon
                    icon={icon(faTrashCan)}
                    className="text-red-500 hover:cursor-pointer"
                />
            </div>
        </motion.div>
    );
};
