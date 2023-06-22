import React from 'react';
import PropTypes from 'prop-types';

function Product({product}) {
    return (
        <div className="productInfo">
                <h4>{product?.productName}</h4>
                <p>{product?.price}</p>
                <ul>{product?.reviews?.map((review) =>
                    <li key={review.reviewId}>
                        {review.dateOfWriting} <br />
                        {review.reviewDescription} <br />
                        {review.score}
                    </li>)}
                </ul>
        </div>
    );
}

export default Product;

//Hierin defineer ik mijn product dat meegegeven wordt binnen het component.
Product.propTypes = {
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