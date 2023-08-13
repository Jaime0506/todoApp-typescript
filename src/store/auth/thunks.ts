import { AppDispatch } from "../store"
import { supabase } from "../../supabase";
import { checking, login, logout } from "./authSlice";

interface onRegisterProps {
    user: string
    email: string
    password: string
}

export const onRegister = ({ user ,email, password }: onRegisterProps) => {
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