import React, {useState} from 'react';
import "./LoginOverlay.css"

function LoginOverlay({ onClose, isAuth }) {
    const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

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
                    ) : (
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
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