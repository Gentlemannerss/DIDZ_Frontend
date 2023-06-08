import React, { useState } from 'react';

function MessageComponent() {
    const [message, setMessage] = useState('');
    const [isSaved, setIsSaved] = useState(false);

    function handleInputChange(e) {
        setMessage(e.target.value);
    }


    function handleSaveConcept() {
        setIsSaved(true);
        // You can perform further actions here, such as saving the message as a concept
    }

    return (
        <div>
            <h2>Compose Message</h2>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={handleInputChange}
                    rows={6}
                    cols={50}
                ></textarea>
            </label>
            <button onClick={handleSaveConcept}>Save as Concept</button>
            {isSaved && <p>Message saved as concept</p>}
        </div>
    );
}

export default MessageComponent;