import { useEffect } from "react";
import { supabase } from "../supabase";

import { useAppDispatch, useAppSelector } from "./"
import { checking, login, logout } from "../store/auth";

export const useCheckAuth = () => {
    const { status } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event)

            dispatch(checking());

            if (!session?.user) {
                dispatch(logout(null));

                return;
            }

            dispatch(login(session.user));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { status }
}