import { motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
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
        >
            <Checkbox
                color="success"
                radius="full"
                lineThrough
                onClick={() => console.log("Me seleccionaron")}
            >
                {todo.title.length > 40
                    ? todo.title.substring(0, 35) + "..."
                    : todo.title}
            </Checkbox>
        </motion.div>
    );
};
