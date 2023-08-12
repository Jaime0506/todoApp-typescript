import { useEffect, useState } from "react";
import { Form, TodoList } from "./components";

import { Todo } from "./types";

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        console.log(todos)
    },[todos])

    return (
        <main className="mx-auto bg-slate-50 min-h-screen flex flex-col justify-center items-center">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
                <section className="bg-slate-200 p-4 rounded-t-md container">
                    <h1 className="font-mono font-bold text-2xl">
                        Todo App 👌
                    </h1>
                </section>

                <Form onNewTodo={setTodos}/>
                <TodoList todos={todos}/>
            </div>
        </main>
    );
};

export default TodoApp;
