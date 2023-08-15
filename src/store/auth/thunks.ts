import { AppDispatch } from "../store"
import { supabase } from "../../supabase";
import { checking, login, logout } from "./authSlice";

interface RegisterProps {
    user: string | null,
    email: string
    password: string
}

interface LoginProps {
    email: string
    password: string
}

export const onRegister = ({ user ,email, password }: RegisterProps) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking())

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: user
                }
            }
        });
        
        if(error) { return console.log(error) }
        
        console.log(data.user)

        if (data.user) return dispatch(login(data.user))
    }
}

export const onLogout = () => {

    return async(dispatch: AppDispatch) => {
        dispatch(checking())

        const { error } = await supabase.auth.signOut()

        if (error) return console.log(error)

        return dispatch(logout())
    }
}

export const onLogin = ({ email, password }: LoginProps) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking())
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) return console.log(error)

        if (data.user) return dispatch(login(data.user))
    }
}