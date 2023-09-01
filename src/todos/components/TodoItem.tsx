import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { useTodosStore, useResize } from "../../hooks";

import type { Todo } from "../../types";

interface TodoItemProps {
    todo: Todo;
    type: "completed" | "unfilled";
}

export const TodoItem = ({ todo, type }: TodoItemProps) => {
    
    const { handleOnSetActiveTodo, handleOnDeleteTodo, handleOnUpdateTodo } = useTodosStore()
    const [tempTodo, setTempTodo] = useState<Todo>(todo)
    const [lengthCut, setLengthCut] = useState(20)

    const containerRef = useRef<HTMLDivElement>(null)
    const { width } = useResize(containerRef)

    const handleToogleDone = () => {
        setTempTodo({
            ...tempTodo,
            ["done"]: !tempTodo.done
        })
    }

    useEffect(() => {
        if (width < 330) {
            setLengthCut(10)
        } else {
            setLengthCut(20)
        }
    }, [width])

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
            className="flex flex-row justify-between items-center gap-3 max-w-full"
            ref={containerRef}
        >
            <Checkbox
                color="success"
                radius="full"
                lineThrough
                isSelected={tempTodo.done}
                onChange={handleToogleDone}
            >
                {todo.title.length > 20
                    ? todo.title.substring(0, lengthCut) + "..."
                    : todo.title}
            </Checkbox>
            <div className="flex flex-row gap-2">
                <FontAwesomeIcon
                    // icon={icon(faPenToSquare)}
                    icon={icon({ name: "pen-to-square", style: "solid"})}
                    className="text-gray-600 hover:cursor-pointer"
                    onClick={() => handleOnSetActiveTodo(todo)}
                />
                <FontAwesomeIcon
                    // icon={icon(faTrashCan)}
                    icon={icon({ name: "trash-can", style: "regular"})}
                    className="text-red-500 hover:cursor-pointer"
                    onClick={() => handleOnDeleteTodo(todo)}
                />
            </div>
        </motion.div>
    );
};
