import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js'

interface AuthState {
    status: string
    uid: string | null,
    user: string | null
}

const initialState: AuthState = {
    status: "checking", // not-authenticated - authenticated - checking
    uid: null,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: { 
        login: (state, action: PayloadAction<User>) => {
            state.uid = action.payload.id
            state.user = action.payload.user_metadata.name
            state.status = "authenticated"
        },

        checking: (state) => {
            state.status = "checking"
        },

        logout: (state) => {
            state.status = "not-authenticated"
            state.uid = null
            state.user = null
        }
    },
});

export const { login, checking, logout } = authSlice.actions;