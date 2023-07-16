import React, { useState, useContext } from 'react';
import "./UserComponent.css";
import { AuthContext } from "../../context/AuthContext";

function UserComponent() {
    const [selectedAccount, setSelectedAccount] = useState('User');
    const { isAuth } = useContext(AuthContext);

    const handleAccountSelect = (account) => {
        setSelectedAccount(account);
    };

    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <div className="profilePicture">
                    <h4>{isAuth && isAuth.user ? isAuth.user.username : 'Unknown User'}</h4>
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                    {/*todo : zorg voor een profile picture*/}
                </div>
            </div>
        </div>
    );
}

export default UserComponent;