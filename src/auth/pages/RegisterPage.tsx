import { Link } from "react-router-dom";
import { FormRegister } from "../components";

export const RegisterPage = () => {
    return (
        <main className="bg-zinc-200 w-screen h-screen flex flex-col items-center justify-center">
            <div className="bg-white w-1/2 rounded-md flex flex-col shadow-lg">
                <header className="pt-6 pr-6 pl-6 pb-2">
                    <h1 className="font-bold">Todo App ✅</h1>
                </header>
                <section className="p-6 flex flex-col gap-9">
                    <FormRegister />
                </section>
                <footer className="pl-7 pr-6 pb-6">
                    <p className="font-mono text-xs">
                        Do you already have an account?{" "}
                        <Link
                            className="text-green-600 underline hover:text-green-500 font-bold"
                            to="/auth/login"
                        >
                            Sign in
                        </Link>
                    </p>
                </footer>
            </div>
        </main>
    );
};
