import React, {useEffect, useState} from 'react';
import MessageComponent from '../Message/MessageComponent';
import './MessageBoardComponent.css';

function MessageBoardComponent() {
    const [questions, setQuestions] = useState([]);

    /*useEffect(async () => {
        try {
            const response = await fetch('http://localhost:8080/messages/study-group/');
            const json = await response.json();
            setQuestions(json);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }, []);*/

    return (
        <div className="message-board">
            <h2>Message Board</h2>
            <MessageComponent setQuestions={setQuestions} />
            <div className="question-list">
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        <p>{question}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MessageBoardComponent;