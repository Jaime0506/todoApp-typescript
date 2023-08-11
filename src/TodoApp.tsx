import { Checkbox, CircularProgress, Input } from "@nextui-org/react";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const todoList = [
    {
        id: 1,
        title: "Esto es una nota bonita",
        done: false,
    },
    {
        id: 2,
        title: "Esto es otra nota",
        done: false,
    },
    {
        id: 3,
        title: "Esto es otra nota de la nota",
        done: false,
    },
];

const TodoApp = () => {
    const [title, setTitle] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>();

    useEffect(() => {
        console.log(title);
    }, [title]);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 4000);
    }, []);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (title.length <= 3) {
            console.log("Debe estar mas lleno");
        }
    };

    return (
        <div className="mx-auto bg-slate-50 min-h-screen flex flex-col justify-center items-center">
            <main className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
                <section className="bg-slate-200 p-4 rounded-t-md container">
                    <h1 className="font-mono font-bold text-2xl">
                        Todo App 👌
                    </h1>
                </section>

                <div className="container rounded-b-md bg-white flex flex-col gap-7 justify-center items-center">
                    <section className="container p-5">
                        <form action="submit" onSubmit={onSubmit}>
                            <Input
                                type="text"
                                variant="underlined"
                                placeholder="Title todo"
                                className="font-mono"
                                value={title}
                                onValueChange={setTitle}
                            />
                        </form>
                    </section>
                </div>

                <section className="container pl-5 pr-5 pb-5 flex flex-col gap-3">
                    <AnimatePresence>
                        { !isVisible && (
                            <div className="conetainer flex flex-col items-center justify-center">
                                <CircularProgress size="sm" aria-label="Loading..." />
                            </div>
                        )}
                        { todoList.map((todo) => isVisible && (
                                    <motion.div
                                        key={todo.id}
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
                                            duration: 2,
                                        }}
                                    >
                                        <Checkbox
                                            color="success"
                                            radius="full"
                                            key={todo.id}
                                            defaultSelected
                                            lineThrough
                                        >
                                            {todo.title}
                                        </Checkbox>
                                    </motion.div>
                                )
                        )}
                    </AnimatePresence>
                </section>
            </main>
        </div>
    );
};

export default TodoApp;
