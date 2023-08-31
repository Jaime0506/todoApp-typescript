import { useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useAuthStore } from '../hooks';

export const Toastify = () => {

    const { errorMessage } = useAuthStore()

    useEffect(() => {
        errorMessage && toast(errorMessage, {
            type: 'error',
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
        })
    }, [errorMessage])

    return <ToastContainer limit={1}/>;
};
