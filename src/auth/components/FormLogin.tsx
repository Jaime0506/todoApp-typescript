import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useAuthStore } from "../../hooks";
import { validationEmail } from "../../helpers";

interface ErrosForm {
    user?: string | null;
    email: string | null;
    password: string | null;
}

const INITIAL_STATE = {
    email: null,
    password: null,
};

export const FormLogin = () => {
    const { handleOnLogin } = useAuthStore();

    const [isVisible, setIsVisible] = useState(false);
    const [errors, setErrors] = useState<ErrosForm>(INITIAL_STATE);

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

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors(INITIAL_STATE);

        const ErrorTemp = {...errors}
        
        console.log(validationEmail(formValues.email))

        if (!(formValues.email.length > 0)) {
            ErrorTemp.email = "The email cannot be empty"
        }

        if (!validationEmail(formValues.email)) {
            ErrorTemp.password = "The email is not valid"
        }

        setErrors(ErrorTemp)

        // if (!(formValues.password.length >= 6)) {
        //     setErrors({
        //         ...errors,
        //         ["password"]: "The password required minimum six characters"
        //     })
        // }


        // if (errors.email === null && errors.password === null) handleOnLogin({ ...formValues });
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            {/* <Input placeholder="User name"/> */}
            <Input
                placeholder="Email"
                type="email"
                radius="sm"
                name="email"
                onChange={handleInputChange}
                value={formValues.email}
                validationState={errors.email ? "invalid" : "valid"}
                errorMessage={errors.email ? errors.email : ""}
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
                validationState={errors.password ? "invalid" : "valid"}
                errorMessage={errors.password ? errors.password : ""}
            />
            <Button color="success" variant="shadow" type="submit">
                Login
            </Button>
        </form>
    );
};
