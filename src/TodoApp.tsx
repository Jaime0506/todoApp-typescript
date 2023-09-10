import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

import { AppRouter } from "./router";
import { store } from "./store";


import { Toastify } from "./components";
import 'react-toastify/dist/ReactToastify.css';
import { useResize } from "./hooks";
import { useEffect, useRef } from "react";

const TodoApp = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const { width } = useResize(containerRef);

    useEffect(() => {
        console.log(width)
    }, [width])
    

    return (
        <div ref={containerRef}>
            <Provider store={store}>
                <NextUIProvider>
                    <AppRouter />
                    <Toastify width={width}/>
                </NextUIProvider>
            </Provider>
        </div>
    );

};

export default TodoApp;
