import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const navigate = useNavigate();

    function login(accesToken) {
        setIsAuth({
            isAuth: true,
        });
        console.log("Gebruiker is ingelogd")
        navigate("/profile")
    }
    function logout() {
        setIsAuth({
            isAuth: false,
            user: null,
        })
        console.log("Gebruiker is uitgelogd")
        navigate('/signin')
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider