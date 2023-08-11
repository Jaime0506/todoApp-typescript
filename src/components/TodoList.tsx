import { Checkbox } from '@nextui-org/react'
import { motion, AnimatePresence} from 'framer-motion'
import { Todo } from '../types';

interface TodoListProps {
    todos: Todo[]
}

export const TodoList = ({ todos }: TodoListProps) => {
    return (
        <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
            <AnimatePresence>
                {/* // <div className="conetainer flex flex-col items-center justify-center">
                            //     <CircularProgress size="sm" aria-label="Loading..." />
                            // </div> */}

                {todos.map((todo) => (
                    <motion.div
                        key={todo.title}
                        initial={{
                            y: 100,
                            opacity: 0,
                            position: "relative",
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 10,
                        }}
                    >
                        <Checkbox
                            color="success"
                            radius="full"
                            key={todo.id}
                            lineThrough
                        >
                            {todo.title}
                        </Checkbox>
                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    );
};
