import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export const LoginPage = () => {

    const [isVisible, setIsVisible] = useState(false)

    const onToogle = () => setIsVisible(!isVisible)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <main className="bg-zinc-100 w-screen h-screen flex flex-col items-center justify-center">
            <div className="bg-white w-1/2 rounded-md flex flex-col shadow-lg">
                <header className="pt-6 pr-6 pl-6 pb-2">
                    <h1 className="font-bold">Todo App ✅</h1>
                </header>
                <section className="p-6 flex flex-col gap-9">
                    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                        {/* <Input placeholder="User name"/> */}
                        <Input
                            placeholder="Email"
                            type="email"
                            radius="sm"
                            name="email"
                        />
                        <Input
                            placeholder="Password"
                            type={`${ isVisible ? "text" : "password" }`}
                            radius="sm"
                            endContent={
                                <button onClick={onToogle}>
                                    { isVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye}/>}
                                </button>
                            }
                        />
                    </form>

                    <Button color="success" variant="shadow">
                        Login
                    </Button>
                </section>
            </div>
        </main>
    );
};
