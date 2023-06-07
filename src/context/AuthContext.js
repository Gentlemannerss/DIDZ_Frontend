import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children}) {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        setIsAuth(true);
        navigate("/profile")
    }
    function logout() {
        setIsAuth(false)
    }

    const data = {
        isAuth : isAuth,
        logout : logout,
        login : login
    }

    return (
        <AuthContextProvider value={data}>
            {children}
        </AuthContextProvider>
    );
}
export default AuthContextProvider
