import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { TodoRoutes } from "../todos/routes";

const status: string = "not-authenticated";
// const status: string = "authenticated";

export const AppRouter = () => {
    console.log("ACA");
    return (
        <Routes>
            {status === "authenticated" ? (
                <Route path="/*" element={<TodoRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    );
};
