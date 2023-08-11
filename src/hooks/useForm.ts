import { useEffect } from "react"
import { Todo } from "../types"

interface useForm {
    initialState: Todo
}

export const useForm = ({ initialState }: useForm) => {
    useEffect(() => {
        console.log(initialState)
    }, [initialState])
}