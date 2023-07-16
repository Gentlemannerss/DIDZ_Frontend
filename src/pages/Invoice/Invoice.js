import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "../../components/Product/Product";
import './Invoice.css';

function Invoice() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // Fetch user's invoices
        const fetchInvoices = async () => {
            try {
                const userId = localStorage.getItem('userId');
                // Make the API request to fetch user's invoices
                const response = await axios.get(`http://localhost:8080/invoices/user/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    }
                });

                // Set the retrieved invoices in the state
                setInvoices(response.data);
                console.log(response.data)
            } catch (error) {
                console.log('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <h2>You're invoices</h2>
                {invoices.length === 0 ? (
                    <p>No invoices found.</p>
                ) : (
                    <ul>
                        {invoices.map((invoice) => (
                            <li key={invoice.invoiceId} className="invoiceContainer">
                                <p>This is invoice number: {invoice.invoiceId}</p>
                                <p>Date of you're invoice: {invoice.orderDate}</p>
                                <p>The total price: {invoice.totalPrice}</p>
                                <p>The invoice address: {invoice.address}</p>
                                <p>Amount of Participants: {invoice.amountOfParticipants}</p>
                                <p>Products that are ordered:</p>
                                {
                                    invoice.products.map((product) => (
                                    <Product
                                        key={product.productId}
                                        product={product}
                                    />
                                    ))
                                }
                                <p>Frequency of appointment: {invoice.frequency}</p>
                                <p>You're comments: {invoice.comments}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Invoice;