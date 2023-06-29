import React, { useState } from 'react';

function MessageComponent({ setQuestions }) {
    const [message, setMessage] = useState('');

    function handleInputChange(e) {
        setMessage(e.target.value);
    }

    function handleSaveQuestion() {
        setQuestions((prevQuestions) => [...prevQuestions, message]);
        setMessage('');
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
            <button onClick={handleSaveQuestion}>Save as Question</button>
        </div>
    );
}

export default MessageComponent;