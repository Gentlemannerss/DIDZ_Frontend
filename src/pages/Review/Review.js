import React, {useState} from 'react';
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import UserComponent from "../../components/UserComponent/UserComponent";


function Review() {
    const [currentProduct, setCurrentProduct] = useState({});

    return (
        <div>
            <UserComponent />
            <ProductSlider
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
            />
            <ReviewForm
                product={currentProduct}
            />
        </div>
    );
}

export default Review;