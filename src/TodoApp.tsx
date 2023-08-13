import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

import { AppRouter } from "./router";
import { store } from "./store";

const TodoApp = () => {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <AppRouter />
            </NextUIProvider>
        </Provider>
    );
    
};

export default TodoApp;
