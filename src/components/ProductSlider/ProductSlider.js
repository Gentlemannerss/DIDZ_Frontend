import React, { useState } from 'react';
import Button from '../Button/Button';
import './ProductSlider.css';

const ProductSlider = () => {
    const products = [
        {
            id: 1,
            title: 'Product 1',
            description: 'Description for Product 1',
            image: 'path_to_image_1',
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'Description for Product 2',
            image: 'path_to_image_2',
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'Description for Product 3',
            image: 'path_to_image_3',
        },
    ];

    const [currentProduct, setCurrentProduct] = useState(0);

    const handleNextProduct = () => {
        setCurrentProduct((prevProduct) => (prevProduct === products.length - 1 ? 0 : prevProduct + 1));
    };

    const handlePreviousProduct = () => {
        setCurrentProduct((prevProduct) => (prevProduct === 0 ? products.length - 1 : prevProduct - 1));
    };

    return (
        <div className="outerContainer">
            <section className="productSlider, innerContainer">
                    <div className="productImage">
                        <img src={products[currentProduct].image} alt={products[currentProduct].title} />
                    </div>
                    <div className="productInfo">
                        <h4>{products[currentProduct].title}</h4>
                        <p>{products[currentProduct].description}</p>
                        <Button />
                    </div>
                    <div className="arrowButtons">
                        <button onClick={handlePreviousProduct}>&lt;</button>
                        <p>
                            {currentProduct + 1} / {products.length}
                        </p>
                        <button onClick={handleNextProduct}>&gt;</button>
                    </div>
            </section>
        </div>
    );
};

export default ProductSlider;

/* Option to use with Database?

import React, { useState, useEffect } from 'react';
import Button from './Button';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleNextProduct = () => {
    setCurrentProduct((prevProduct) => (prevProduct === products.length - 1 ? 0 : prevProduct + 1));
  };

  const handlePreviousProduct = () => {
    setCurrentProduct((prevProduct) => (prevProduct === 0 ? products.length - 1 : prevProduct - 1));
  };

  return (
    <div className="productSlider">
      <div className="productImage">
        <img src={products[currentProduct]?.image} alt={products[currentProduct]?.title} />
      </div>
      <div className="productInfo">
        <h4>{products[currentProduct]?.title}</h4>
        <p>{products[currentProduct]?.description}</p>
        <Button />
      </div>
      <div className="arrowButtons">
        <button onClick={handlePreviousProduct}>&lt;</button>
        <p>
          {currentProduct + 1} / {products.length}
        </p>
        <button onClick={handleNextProduct}>&gt;</button>
      </div>
    </div>
  );
};

export default ProductSlider;

*/