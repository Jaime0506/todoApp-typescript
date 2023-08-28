import { motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { useTodosStore } from "../../hooks";

import type { Todo } from "../../types";
import { useEffect, useState } from "react";

interface TodoItemProps {
    todo: Todo;
    type: "completed" | "unfilled";
}

export const TodoItem = ({ todo, type }: TodoItemProps) => {
    
    const { handleOnSetActiveTodo, handleOnDeleteTodo, handleOnUpdateTodo } = useTodosStore()
    const [tempTodo, setTempTodo] = useState<Todo>(todo)

    const handleToogleDone = () => {
        setTempTodo({
            ...tempTodo,
            ["done"]: !tempTodo.done
        })
    }

    useEffect(() => {
        if (todo.done !== tempTodo.done) handleOnUpdateTodo(tempTodo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempTodo])

    return (
        <motion.div
            initial={{
                y: type === "unfilled" ? -100 : 100,
                opacity: 0,
                position: "relative",
            }}
            exit={{
                y: type === "unfilled" ? -100 : 100,
                opacity: 0,
                position: "absolute"
            }}

            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
            className="flex flex-row justify-between items-center gap-3"
        >
            <Checkbox
                color="success"
                radius="full"
                lineThrough
                isSelected={tempTodo.done}
                onChange={handleToogleDone}
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
