import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element | void }) => {
    const location = useLocation();
    const { validateToken, user } = useContext(AuthContext);

    useEffect(() => {
        validateToken();
    }, [location.pathname])

    if (!user) {
        return <Navigate to="/" />
    }

    return <>{children}</>
}