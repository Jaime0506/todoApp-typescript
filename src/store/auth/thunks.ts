import { AppDispatch } from "../store";
import { supabase } from "../../supabase";
import { checking, login, logout } from "./authSlice";

import type { Login, Register } from "../../types";

export const onRegister = ({ user, email, password }: Register) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking());

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: user,
                },
            },
        });

        if (error) return dispatch(logout(error.message));

        if (data.user) return dispatch(login(data.user));
    };
};

export const onLogout = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking());

        const { error } = await supabase.auth.signOut();

        if (error) return dispatch(logout(error.message));

        return dispatch(logout(null));
    };
};

export const onLogin = ({ email, password }: Login) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking());

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) return dispatch(logout(error.message));

        if (data.user) return dispatch(login(data.user));
    };
};
