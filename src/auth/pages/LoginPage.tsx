import { FooterAuth, FormLogin, GoogleButton } from "../components";

export const LoginPage = () => {
    return (
        <main className="bg-zinc-200 w-screen h-screen flex flex-col items-center justify-center min-w-[300px]">
            <div className="bg-white md:w-[450px] sm:w-[380px] w-3/4 min-w-[330px] rounded-md flex flex-col shadow-lg">
                <header className="pt-6 pr-6 pl-6 pb-2">
                    <h1 className="font-bold">Todo App ✅</h1>
                </header>
                <FormLogin />
                <GoogleButton />
                <FooterAuth type="login" />
            </div>
        </main>
    );
};
