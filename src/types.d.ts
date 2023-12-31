export interface Todo {
    id: string | null,
    title: string,
    done: boolean,
    create_at: number,
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

export interface ErrosForm {
    user?: string | null;
    email: string | null;
    password: string | null;
}