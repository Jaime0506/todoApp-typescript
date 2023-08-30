import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

import { AppRouter } from "./router";
import { store } from "./store";


import { Toastify } from "./components";
import 'react-toastify/dist/ReactToastify.css';

const TodoApp = () => {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <AppRouter />
                <Toastify />
            </NextUIProvider>
        </Provider>
    );
    
};

export default TodoApp;
