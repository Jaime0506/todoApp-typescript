import { GoogleIcon } from "."
import { useAuthStore } from "../../hooks"
import { Button } from "@nextui-org/react"

export const GoogleButton = () => {
    const { handleOnLoginWithGoogle } = useAuthStore()

    return (
        <section className="pl-6 pb-6 pr-6 flex justify-center">
            <Button
                className="w-full"
                variant="bordered"
                onClick={handleOnLoginWithGoogle}
            >
                <GoogleIcon />
                Sign in with Google
            </Button>
        </section>
    )
}
