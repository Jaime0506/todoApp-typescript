import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "."
import { supabase } from "../supabase";
import { checking, login, logout } from "../store/auth/authSlice";

export const useCheckAuth = () => {
    const { status } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(checking());

            if (!session?.user) {
                dispatch(logout());

                return;
            }

            dispatch(login(session.user));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { status }
}