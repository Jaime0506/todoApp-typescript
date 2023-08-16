export interface Todo {
    id: string | null,
    title: string,
    done: boolean,
    start: Date | null,
}

export interface Register {
    user: string | null,
    email: string
    password: string
}

export interface Login {
    email: string
    password: string
}