import React, { useState } from 'react';
import "./UserComponent.css";

function UserComponent() {
    const [selectedAccount, setSelectedAccount] = useState('User');

    const handleAccountSelect = (account) => {
        setSelectedAccount(account);
    };

    return (
        <div className="outerContainer">
            <div className="innerContainer">
            <div className="profilePicture">
                <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <div className="userSelector">
                <div className="arrow"></div>
                <h5 onClick={() => handleAccountSelect('User')}>{selectedAccount}</h5>
                <ul className="accountList">
                    <li onClick={() => handleAccountSelect('Account 1')}>Account 1</li>
                    <li onClick={() => handleAccountSelect('Account 2')}>Account 2</li>
                    <li onClick={() => handleAccountSelect('Account 3')}>Account 3</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default UserComponent;