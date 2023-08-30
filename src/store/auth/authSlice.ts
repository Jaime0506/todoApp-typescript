import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User } from '@supabase/supabase-js'

interface AuthState {
    status: string
    uid: string | null
    user: string | null
    errorMessage: string | null
}

const initialState: AuthState = {
    status: "checking", // not-authenticated - authenticated - checking
    uid: null,
    user: null,
    errorMessage: null
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
            state.errorMessage = null
        },

        logout: (state, action: PayloadAction<string | null>) => {
            state.status = "not-authenticated"
            state.uid = null
            state.user = null
            state.errorMessage = action.payload ? action.payload : null
        },
    },
});

export const { login, checking, logout } = authSlice.actions;