import { Link } from "react-router-dom"

interface Props {
    type: "login" | "register"
}

export const FooterAuth = ({ type }: Props) => {
    return (
        <footer className="pl-7 pr-6 pb-6">
            {type === "login" ? (
                <p className="font-mono text-xs">
                    You are not registered? <Link className="text-green-600 underline hover:text-green-500 font-bold" to="/auth/register" >Sign up</Link>
                </p>

            ) : (
                <p className="font-mono text-xs">
                    Do you already have an account?{" "}
                    <Link
                        className="text-green-600 underline hover:text-green-500 font-bold"
                        to="/auth/login"
                    >
                        Sign in
                    </Link>
                </p>
            )}
        </footer>
    )
}
