import React, { useState, useRef } from 'react';
import axios from "axios";
import PropTypes from "prop-types";

function ReviewForm({ product }) {
    const [score, setScore] = useState(0);
    const [reviewDescription, setReviewDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const formRef = useRef(null);
    const reviewInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const reviewFormData = {
            score: score,
            reviewDescription: reviewDescription,
            customerId : localStorage.getItem('userId'),
            productId : product.productId,
        };
        console.log(reviewFormData);
        //Send it here to the backend!
        createReview(reviewFormData)

        //Reset the form
        formRef.current.reset();
        reviewInputRef.current.value = '';
    }

    const createReview = async (review) => {
        try {
            const response = await axios.post('http://localhost:8080/reviews', review, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

            console.log(response.data)
        } catch (error) {
            console.error('Error fetching products:', error);
            setErrorMessage(error.response.data)
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <h2>Reviewing {product?.productName}</h2>
            <fieldset>
                <legend>Score</legend>
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
                        placeholder="Enter here your honest review."
                        value={reviewDescription}
                        onChange={(e) => setReviewDescription(e.target.value)}
                        ref={reviewInputRef}
                    ></textarea>
                </label>
            </fieldset>

            <button type="submit">Submit</button>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </form>
    );
}

export default ReviewForm;

ReviewForm.propTypes = {
    product : PropTypes.shape({
        productId : PropTypes.number,
        productName : PropTypes.string,
        price : PropTypes.number,
        productType : PropTypes.string,
        reviews : PropTypes.arrayOf(PropTypes.shape({
            reviewId : PropTypes.number,
            score : PropTypes.number,
            reviewDescription : PropTypes.string,
            dateOfWriting : PropTypes.string
        }))
    })
}