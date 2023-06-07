import React from 'react';
import Button from "../Button/Button";
import Navigation from "./Navigation";

function Header(props) {
    return (
        <div>
            <div className="outerContainer">
                <div className="innerContainer">
                    <Navigation />
                </div>
            </div>
            <div className="outerContainer">
                <div className="innerContainer">
                    <h1>Getting you college to the next digital level</h1>
                    <p>Here we will make every colleague known in the digital world of you're organization</p>
                    <Button />
                    <img src="" alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export default Header;