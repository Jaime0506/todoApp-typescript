import { useState } from 'react'
import { Input } from '@nextui-org/react';

import { Todo } from '../types';

interface FormProps {
    onNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Form = ({ onNewTodo }: FormProps)  => {

    const [todo, setTodo] = useState<Todo>({
        id: null,
        title: "",
        done: false,
        start: null
    })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (todo?.title.length <= 3) return console.log("Debe estar mas lleno")
        // setTodos([ //     todo, //     ...todos, // ])
        
        setTodo({
            id: null,
            title: "",
            done: false,
            start: null
        })

        onNewTodo((todos) => [todo, ...todos])
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="container rounded-b-md bg-white flex flex-col gap-7 justify-center items-center">
            <section className="container p-5">
                <form action="submit" onSubmit={onSubmit}>
                    <Input
                        type="text"
                        variant="underlined"
                        placeholder="Title todo"
                        className="font-mono"
                        name="title"
                        value={todo?.title}
                        onChange={handleInputChange}
                    />
                </form>
            </section>
        </div>
    );
};
