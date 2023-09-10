import { useState } from "react";
import type { Todo } from "../types";

interface useFormProps {
    initialState: Todo
    handleOnNewTodo: (todo: Todo) => void
    handleOnUpdateTodo: (todo: Todo) => void
}

export const useForm = ({ initialState, handleOnNewTodo, handleOnUpdateTodo }: useFormProps) => {
    const [formValue, setFormValue] = useState<Todo>(initialState);
    const [errorInput, setErrorInput] = useState("")
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formValue.title.length <= 3) {
            return setErrorInput("Debe tener minimo 4 palabras la nota");
        } else {
            setErrorInput("")
        }
        formValue.id ? handleOnUpdateTodo(formValue) : handleOnNewTodo(formValue);

        setFormValue({
            id: null,
            title: "",
            done: false,
            create_at: 0,
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const handleSetValues = (todo: Todo) => {
        setFormValue({...todo})
    }

    return {
        ...formValue,
        errorInput,
        onSubmit,
        handleInputChange,
        handleSetValues,
    };
};
