import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuthStore } from "../../hooks";
import { validationEmail } from "../../helpers";

import type { ErrosForm } from "../../types";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const INITIAL_STATE = {
    user: null,
    email: null,
    password: null,
};

export const FormRegister = () => {
    const { status, handleOnRegister } = useAuthStore();
    const [errors, setErrors] = useState<ErrosForm>({...INITIAL_STATE})

    const [isVisible, setIsVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        user: "",
        email: "",
        password: "",
    });

    const toogleVisible = () => setIsVisible(!isVisible);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const ErrorTemp = {...errors}

        if (!(formValues.user.length > 0)) {
            ErrorTemp.user = "The user name cannoat be empty"
        } else {
            ErrorTemp.user = null
        }
        
        if (!(formValues.email.length > 0)) {
            ErrorTemp.email = "The email cannot be empty"
        } else if (!validationEmail(formValues.email)) {
            ErrorTemp.email = "The email is not valid"
        } else {
            ErrorTemp.email = null
        }

        if (!(formValues.password.length > 0)) {
            ErrorTemp.password = "The password connot be empty"
        } else if (!(formValues.password.length >= 6)) {
            ErrorTemp.password = "The password required minimum six characters"
        } else {
            ErrorTemp.password = null
        }

        if (ErrorTemp.email === null && ErrorTemp.password === null && ErrorTemp.user === null) return handleOnRegister({ ...formValues });

        setErrors(ErrorTemp)
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
                validationState={errors.user ? "invalid" : "valid"}
                errorMessage={errors.user ? errors.user : ""}
            />
            <Input
                value={formValues.email}
                placeholder="Email"
                type="email"
                radius="sm"
                name="email"
                onChange={handleInputChange}
                isDisabled={status === "checking" ? true : false}
                validationState={errors.email ? "invalid" : "valid"}
                errorMessage={errors.email ? errors.email : ""}
            />
            <Input
                value={formValues.password}
                name="password"
                placeholder="Password"
                radius="sm"
                isDisabled={status === "checking" ? true : false}
                type={`${isVisible ? "text" : "password"}`}
                onChange={handleInputChange}
                validationState={errors.password ? "invalid" : "valid"}
                errorMessage={errors.password ? errors.password : ""}
                endContent={
                    <button onClick={toogleVisible} type="button">
                        {isVisible ? (
                            <FontAwesomeIcon icon={icon({ name: "eye-slash", style: "solid"})} />
                        ) : (
                            <FontAwesomeIcon icon={icon({ name: "eye", style: "solid"})} />
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
