import { useAppDispatch, useAppSelector } from "./"
import { onLogin, onLoginWithGoogle, onLogout, onRegister } from "../store/auth/thunks"

import type { Login, Register } from "../types"

export const useAuthStore = () => {
    const { status, uid, user, errorMessage } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const handleOnRegister = ({ user, email, password }:Register) => {
        dispatch(onRegister({ user, email, password }))
    }

    const  handleOnLogin = ({ email, password }:Login) => {
        dispatch(onLogin({ email, password }))
    }   

    const handleOnLogout = () => {
        dispatch(onLogout())
    }

    const handleOnLoginWithGoogle = () => {
        dispatch(onLoginWithGoogle())
    }

    return {
        status,
        uid,
        user,
        errorMessage,

        handleOnRegister,
        handleOnLogin,
        handleOnLogout,
        handleOnLoginWithGoogle
    }
}