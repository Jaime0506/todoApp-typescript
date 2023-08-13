import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { onRegister } from "../../store/auth/thunks";

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector((store) => store.auth);

    const [isVisible, setIsVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        user: "",
        email: "",
        password: "",
    });

    const toogleVisible = () => setIsVisible(!isVisible);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(onRegister({ ...formValues }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <main className="bg-zinc-200 w-screen h-screen flex flex-col items-center justify-center">
            <div className="bg-white w-1/2 rounded-md flex flex-col shadow-lg">
                <header className="pt-6 pr-6 pl-6 pb-2">
                    <h1 className="font-bold">Todo App ✅</h1>
                </header>
                <section className="p-6 flex flex-col gap-9">
                    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                        <Input
                            value={formValues.user}
                            placeholder="User name"
                            type="text"
                            radius="sm"
                            name="user"
                            onChange={handleInputChange}
                            isDisabled={status === "checking" ? true : false}
                        />
                        <Input
                            value={formValues.email}
                            placeholder="Email"
                            type="email"
                            radius="sm"
                            name="email"
                            onChange={handleInputChange}
                            isDisabled={status === "checking" ? true : false}
                        />
                        <Input
                            value={formValues.password}
                            name="password"
                            placeholder="Password"
                            radius="sm"
                            isDisabled={status === "checking" ? true : false}
                            type={`${isVisible ? "text" : "password"}`}
                            onChange={handleInputChange}
                            endContent={
                                <button onClick={toogleVisible}>
                                    {isVisible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                    )}
                                </button>
                            }
                        />
                        <Button
                            color="success"
                            variant="shadow"
                            type="submit"
                            isDisabled={status === "checking" ? true : false}
                            isLoading={status === "checking" ? true : false}
                        >
                            Register
                        </Button>
                    </form>
                </section>
                <footer className="pl-7 pr-6 pb-6">
                    <p className="font-mono text-xs">
                        Do you already have an account?{" "}
                        <Link
                            className="text-green-600 underline hover:text-green-500 font-bold"
                            to="/auth/login"
                        >
                            Sing in
                        </Link>
                    </p>
                </footer>
            </div>
        </main>
    );
};
