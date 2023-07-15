import React, { useEffect, useState } from 'react';
import MessageComponent from '../Message/MessageComponent';
import './MessageBoardComponent.css';
import axios from 'axios';

function MessageBoardComponent({studyGroupId}) {
    const [questions, setQuestions] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    async function fetchMessages() {
        try {
            const response = await axios.get(`http://localhost:8080/messages/study-group/${studyGroupId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log(response)
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    const postMessage = async() => {
        console.log(message)
        const userId = localStorage.getItem("userId")
        try {
            await axios.post('http://localhost:8080/messages', {"messageContent": message, "senderId": userId, "studyGroupId": studyGroupId} , {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            fetchMessages(); // Refresh the messages after posting
        } catch (error) {
            console.error('Error posting message:', error);
        }
    }

    return (
        <div className="message-board">
            <h2>Message Board</h2>
            <MessageComponent message={message} setMessage={setMessage} />
            <div className="question-list">
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        <p>{question.messageContent}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={postMessage}
            >Save as Question</button>
        </div>
    );
}

export default MessageBoardComponent;