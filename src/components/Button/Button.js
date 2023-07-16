import React from 'react';
import './Button.css';

function Button({ buttonText, buttonType, className, clickHandler, disabled = false, icon }) {
    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={clickHandler}
            disabled={disabled}
        >
            {icon && <img src={icon} alt="icon" className="button-icon" />}
            {buttonText && <span className="button-text">{buttonText}</span>}
        </button>
    );
}

export default Button;