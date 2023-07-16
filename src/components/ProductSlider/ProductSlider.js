import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';
import Product from "../Product/Product";
import PropTypes from "prop-types";
import axios from "axios";
import './ProductSlider.css';

function ProductSlider ({ currentProduct, setCurrentProduct}) {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
      setCurrentProduct(response.data[currentProductIndex])
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  if (products.length === 0) {
    return <div>Loading...</div>; // Display a loading state when the products are being fetched
  }
  function handleNextProduct() {
    const productIndex = () => {return (currentProductIndex === products.length - 1 ? 0 : currentProductIndex + 1)}
    setCurrentProductIndex(productIndex());
    setCurrentProduct(products[productIndex()]);
  }

  function handlePreviousProduct() {
    const productIndex = () => {return (currentProductIndex === 0 ? products.length - 1 : currentProductIndex - 1)}
    setCurrentProductIndex(productIndex());
    setCurrentProduct(products[productIndex()]);
  }

  return (
      <div className="outerContainer">
        <div className="innerContainer productSlider">
          {/*<div className="productImage">
            <img src={products[currentProduct]?.image} alt={products[currentProduct]?.productName} />
          </div>*/}
          <Product
            product={products[currentProductIndex]}
          />
          <div className="arrowButtons">
            <Button
            buttonText='&lt;'
            clickHandler={handlePreviousProduct}
            className={'previousButton'}
            />
            <p>
              {currentProductIndex + 1} / {products.length}
            </p>
            <Button
            buttonText='&gt;'
            clickHandler={handleNextProduct}
            className={'nextButton'}
            />
          </div>
        </div>
      </div>
  );
}

export default ProductSlider;

ProductSlider.propTypes = {
  currentProduct : PropTypes.shape({
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
}),
  setCurrentProduct : PropTypes.func
}