import { Input } from "@nextui-org/react";

import { useForm } from "../hooks";
import { Todo } from "../types";

interface FormProps {
    onNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const INITIAL_STATE = {
    id: null,
    title: "",
    done: false,
    start: null,
};

export const Form = ({ onNewTodo }: FormProps) => {
    const { title, onSubmit, handleInputChange } = useForm({ initialState: INITIAL_STATE, onNewTodo });

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
                        value={title}
                        onChange={handleInputChange}
                    />
                </form>
            </section>
        </div>
    );
};
