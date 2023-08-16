import { useState } from "react";
import { Todo } from "../types";

interface useFormProps {
    initialState: Todo
    onNewTodo: (todo: Todo) => void
    onUpdateTodo: (todo: Todo) => void
}

export const useForm = ({ initialState, onNewTodo, onUpdateTodo }: useFormProps) => {
    const [formValue, setFormValue] = useState<Todo>(initialState);
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formValue.title.length <= 3)
            return console.log("Debe estar mas lleno");
            
        formValue.id ? onUpdateTodo(formValue) : onNewTodo(formValue);

        setFormValue({
            id: null,
            title: "",
            done: false,
            start: null,
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
        onSubmit,
        handleInputChange,
        handleSetValues,
    };
};
