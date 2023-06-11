import React from 'react';
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

function Products() {
    return (
        <div>
            <ProductSlider />
            <InvoiceForm />
        </div>
    );
}

export default Products;