import { Routes, Route, Navigate } from "react-router-dom";
import { TodoPage } from "../page";

export const TodoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
