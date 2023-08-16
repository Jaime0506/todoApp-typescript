import { useAppDispatch, useAppSelector } from "./"
import { onLogin, onLogout, onRegister } from "../store/auth/thunks"

import type { Login, Register } from "../types"

export const useAuthStore = () => {
    const { status, uid, user } = useAppSelector(state => state.auth)
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

    return {
        status,
        uid,
        user,

        handleOnRegister,
        handleOnLogin,
        handleOnLogout,
    }
}