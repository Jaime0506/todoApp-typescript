import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import TodoApp from "./TodoApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <TodoApp />
        </HashRouter>
    </React.StrictMode>
);
