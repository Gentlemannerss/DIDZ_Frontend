import React, {useState} from 'react';
import "./LoginOverlay.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import { Link } from "react-router-dom";

function LoginOverlay({ onClose, isAuth }) {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    async function onSubmit(data){
        try {
            const result = await axios.post("http://localhost:3000/login", data);
            console.log(result);
            const token = result.data.accessToken;
            localStorage.setItem('token', token);
            login(result.data.accessToken)
        } catch (e) {
            console.error(e)
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return (
        <div className="login-overlay">
            <div className="login-container">
                <div className="blur-background" onClick={onClose}></div>
                <div className="login-form">
                    {/* Login form components go here */}
                    {isLoggedIn ? (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                    ) : (<>
                        <h1>Inloggen</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                        <label>Emailadres:</label>
                        <input type="email" {...register('email', { required: true })} />
                        </div>
                        <div>
                        <label>Wachtwoord:</label>
                        <input type="password" {...register('password', { required: true })} />
                        </div>
                        <button type="submit">Inloggen</button>
                        </form>

                        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                    </>)}
                    <button className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginOverlay;