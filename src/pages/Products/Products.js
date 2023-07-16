import React, {useState} from 'react';
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import WhatDoWeDo from "../../components/WhatDoWeDo/WhatDoWeDo";

function Products() {
    const [currentProduct, setCurrentProduct] = useState({});

    return (
        <div>
            <ProductSlider
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
            />
            <WhatDoWeDo />
            {/*todo how to do this without br line, css margin?*/}
            {/* een pseudo of after element*/}
            <br />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <InvoiceForm />
        </div>
    );
}

export default Products;