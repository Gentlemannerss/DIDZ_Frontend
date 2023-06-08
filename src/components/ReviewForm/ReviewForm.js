import React, { useState } from 'react';

function ReviewForm({ product }) {
    const [score, setScore] = useState(0);
    const [reviewDescription, setReviewDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const reviewFormData = {
            score: score,
            reviewDescription: reviewDescription,
        };
        console.log(reviewFormData);
        // You can perform further actions with the review form data, such as sending it to the backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reviewing {product}</h2>

            <fieldset>
                <legend>Score</legend>
                {/* You can implement a star rating component here */}
                <div>
                    <label>
                        <input
                            type="radio"
                            name="score"
                            value="1"
                            checked={score === 1}
                            onChange={() => setScore(1)}
                        />
                        1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="score"
                            value="2"
                            checked={score === 2}
                            onChange={() => setScore(2)}
                        />
                        2
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="score"
                            value="3"
                            checked={score === 3}
                            onChange={() => setScore(3)}
                        />
                        3
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="score"
                            value="4"
                            checked={score === 4}
                            onChange={() => setScore(4)}
                        />
                        4
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="score"
                            value="5"
                            checked={score === 5}
                            onChange={() => setScore(5)}
                        />
                        5
                    </label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Review Description</legend>
                <label htmlFor="review-description">
                    Description:
                    <textarea
                        name="reviewDescription"
                        id="review-description"
                        rows="4"
                        cols="40"
                        placeholder="Enter your review description"
                        value={reviewDescription}
                        onChange={(e) => setReviewDescription(e.target.value)}
                    ></textarea>
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ReviewForm;