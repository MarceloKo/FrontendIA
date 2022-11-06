import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: {children:JSX.Element | void}) => {

    const auth = useContext(AuthContext);
    console.log(auth)
    if(!auth?.user){
        return <Navigate to="/" />
    }
    return <>{children}</>
}