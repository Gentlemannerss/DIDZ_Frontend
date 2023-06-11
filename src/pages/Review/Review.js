import React from 'react';
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import UserComponent from "../../components/UserComponent/UserComponent";

function Review() {
    return (
        <div>
            <UserComponent />
            <ProductSlider />
            <ReviewForm />
        </div>
    );
}

export default Review;