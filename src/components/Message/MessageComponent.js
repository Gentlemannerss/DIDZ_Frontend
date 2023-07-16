import React, { useState } from 'react';
import PropTypes from "prop-types";

function MessageComponent({ message, setMessage }) {


    /*function handleInputChange(e) {
        setMessage(e.target.value);
    }

    function handleSaveQuestion() {
        setMessage(message);
    }*/

    return (
        <div>
            <h2>Compose Message</h2>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    cols={50}
                ></textarea>
            </label>
        </div>
    );
}

export default MessageComponent;

MessageComponent.propTypes = {
    messageComponent: PropTypes.shape({
        setQuestions: PropTypes.func.isRequired,
    })
};