import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "../../components/Product/Product";

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
        <div>
            <h2>User Invoices</h2>
            {invoices.length === 0 ? (
                <p>No invoices found.</p>
            ) : (
                <ul>
                    {invoices.map((invoice) => (
                        <li key={invoice.id}>
                            <p>Invoice ID: {invoice.id}</p>
                            <p>Invoice Date: {invoice.orderDate}</p>
                            <p>Amount: {invoice.totalPrice}</p>
                            <p>Address: {invoice.address}</p>
                            <p>Invoice address: {invoice.invoiceAddress}</p>
                            <p>Amount of Participants: {invoice.amountOfParticipants}</p>
                            <p>Products:</p>
                            {
                                invoice.products.map((product) => (
                                <Product
                                product={product}
                                />
                                ))
                            }
                            <p>Frequency: {invoice.frequency}</p>
                            <p>Comments: {invoice.comments}</p>
                            <p>Terms of condition: {invoice.termsOfCondition}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Invoice;