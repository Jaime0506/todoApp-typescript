import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useAuthStore } from "../../hooks";

export const FormRegister = () => {
    const { status, handleOnRegister } = useAuthStore();

    const [isVisible, setIsVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        user: "",
        email: "",
        password: "",
    });

    const toogleVisible = () => setIsVisible(!isVisible);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleOnRegister({ ...formValues });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    return (
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
                    <button onClick={toogleVisible} type="button">
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
    );
};
