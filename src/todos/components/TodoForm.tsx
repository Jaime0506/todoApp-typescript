import { useEffect } from 'react'
import { Input } from "@nextui-org/react";

import { useForm, useTodosStore } from "../../hooks";

const INITIAL_STATE = {
    id: null,
    title: "",
    done: false,
    create_at: 0,
};

export const TodoForm = () => {

    const { activeTodo, handleOnNewTodo, handleOnUpdateTodo } = useTodosStore()

    const { title, onSubmit, handleInputChange, handleSetValues, errorInput } = useForm({ initialState: INITIAL_STATE, handleOnNewTodo, handleOnUpdateTodo});

    useEffect(() => {
        if (activeTodo) handleSetValues({...activeTodo})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTodo])
    
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
                        validationState={errorInput.length > 1 ? "invalid" : "valid"}
                        errorMessage={errorInput}
                        value={title}
                        onChange={handleInputChange}
                    />
                </form>
            </section>
        </div>
    );
};
