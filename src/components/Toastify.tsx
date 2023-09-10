import { useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useAuthStore } from '../hooks';

interface Props {
    width: number;
}

export const Toastify = ({ width }: Props) => {

    const { errorMessage } = useAuthStore()

    useEffect(() => {
        errorMessage && toast(errorMessage, {
            type: 'error',
            position: width > 650 ? toast.POSITION.BOTTOM_RIGHT : toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorMessage])

    return <ToastContainer limit={1} />;
};
