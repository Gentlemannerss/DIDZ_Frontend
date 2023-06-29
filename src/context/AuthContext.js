import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkTokenValidity } from "../utils/checkTokenValidity";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

            if (storedToken && checkTokenValidity(storedToken)) {
                login(storedToken);
            } else {
                setAuth({
                    ...auth,
                    isAuth: false,
                    user: null,
                    status: "done",
                });
            }
    }, []);

    async function login(accessToken, redirect) {
        localStorage.setItem("token", accessToken);
        const decodedToken = jwt_decode(accessToken);
        try {
            const response = await axios.get(
                `http://localhost:8080/users/${localStorage.getItem('userId')}`,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            console.log(response)
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    id: response.data.id,
                    username: response.data.username,
                },
                status: "done",
            });
            console.log("Gebruiker is ingelogd");
            if (redirect) navigate(redirect);
        } catch (e) {
            console.error(e);
        }
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        console.log("Gebruiker is uitgelogd");
        navigate("/");
    }

    const data = {
        isAuth: auth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;