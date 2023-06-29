import React, {useState} from 'react';
import "./LoginOverlay.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import { Link } from "react-router-dom";

function LoginOverlay({ onClose, isAuth }) {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuth);
    const [formMode, setFormMode] = useState('login');

    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    async function onSubmit(data){
        try {
            const result = await axios.post("http://localhost:8080/authenticate", {
                username : data.username,
                password : data.password
            });
            const token = result.data.jwt;
            console.log(result)
            localStorage.setItem('token', token);
            localStorage.setItem('userId', result.data.userId);
            login(token, '/profile')
            onClose()
        } catch (e) {
            console.error("Onjuist email en wachtwoord combinatie" + e)
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleSwitchForm = () => {
        setFormMode(formMode === 'login' ? 'signup' : 'login');
    };

    return (
        <div className="login-overlay">
            <div className="login-container">
                <div className="blur-background" onClick={onClose}></div>
                <div className="login-form">
                    {isLoggedIn ? (
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <>
                            {formMode === 'login' ? (
                                <>
                                    <h1>Inloggen</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label>Gebruikersnaam:</label>
                                            <input type="text" {...register('username', { required: true })} />
                                        </div>
                                        <div>
                                            <label>Wachtwoord:</label>
                                            <input type="password" {...register('password', { required: true })} />
                                        </div>
                                        <button type="submit">Inloggen</button>
                                    </form>
                                    <p>
                                        Heb je nog geen account?{' '}
                                        <Link to="#" onClick={handleSwitchForm}>
                                            Registreer
                                        </Link>{' '}
                                        je dan eerst.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h1>Registreren</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label>Emailadres:</label>
                                            <input type="email" {...register('email', { required: true })} />
                                        </div>
                                        <div>
                                            <label>Wachtwoord:</label>
                                            <input type="password" {...register('password', { required: true })} />
                                        </div>
                                        <div>
                                            <label>Gebruikersnaam:</label>
                                            <input type="text" {...register('username')} />
                                        </div>
                                        <button type="submit">Registreren</button>
                                    </form>
                                    <p>
                                        Heb je al een account?{' '}
                                        <Link to="#" onClick={handleSwitchForm}>
                                            Log in
                                        </Link>
                                    </p>
                                </>
                            )}
                        </>
                    )}
                    <button className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginOverlay;