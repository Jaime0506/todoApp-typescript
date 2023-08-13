
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { TodoRoutes } from "../todos/routes";

import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../components";

export const AppRouter = () => {
    const { status } = useCheckAuth()

    if (status === "checking") return <CheckingAuth />;

    return (
        <Routes>
            {status === "authenticated" ? (
                <Route path="/*" element={<TodoRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
