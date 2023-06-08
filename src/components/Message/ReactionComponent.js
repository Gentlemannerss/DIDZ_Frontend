import React, { useState } from 'react';

function ReactionComponent({ message }) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    const handleComment = (comment) => {
        setComments((prevComments) => [...prevComments, comment]);
    };

    return (
        <div>
            <button onClick={handleLike}>Like ({likes})</button>
            <div>
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Add a comment"
                    onChange={(e) => handleComment(e.target.value)}
                />
            </div>
        </div>
    );
}

export default ReactionComponent;