import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useAuthStore } from "../../hooks";

export const LoginPage = () => {
    const { handleOnLogin } = useAuthStore()
    const [isVisible, setIsVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const onToogle = () => setIsVisible(!isVisible);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleOnLogin({...formValues})
    };

    return (
        <main className="bg-zinc-200 w-screen h-screen flex flex-col items-center justify-center">
            <div className="bg-white w-1/2 rounded-md flex flex-col shadow-lg">
                <header className="pt-6 pr-6 pl-6 pb-2">
                    <h1 className="font-bold">Todo App ✅</h1>
                </header>
                <section className="p-6 flex flex-col gap-9">
                    <form
                        className="flex flex-col gap-8"
                        onSubmit={onSubmit}
                    >
                        {/* <Input placeholder="User name"/> */}
                        <Input
                            placeholder="Email"
                            type="email"
                            radius="sm"
                            name="email"
                            onChange={handleInputChange}
                            value={formValues.email}
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                            type={`${isVisible ? "text" : "password"}`}
                            radius="sm"
                            endContent={
                                <button onClick={onToogle} type="button">
                                    {isVisible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                    )}
                                </button>
                            }
                            onChange={handleInputChange}
                            value={formValues.password}
                        />
                        <Button color="success" variant="shadow" type="submit">
                            Login
                        </Button>
                    </form>
                </section>
                <footer className="pl-7 pr-6 pb-6">
                    <p className="font-mono text-xs">
                        You are not registered? <Link className="text-green-600 underline hover:text-green-500 font-bold" to="/auth/register" >Sign up</Link>
                    </p>
                </footer>
            </div>
        </main>
    );
};
