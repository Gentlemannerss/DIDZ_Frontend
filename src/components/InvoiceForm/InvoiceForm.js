import React, { useState } from 'react';

function InvoiceForm() {
    const [address, setAddress] = useState('');
    const [amountOfParticipants, setAmountOfParticipants] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [invoiceAddress, setInvoiceAddress] = useState('');
    const [frequencyOfSessions, setFrequencyOfSessions] = useState('');
    const [termsOfCondition, setTermsOfCondition] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const invoiceFormData = {
            address: address,
            amountOfParticipants: amountOfParticipants,
            product: selectedProduct,
            invoiceAddress: invoiceAddress,
            frequencyOfSessions: frequencyOfSessions,
            termsOfCondition: termsOfCondition,
            name: name,
            email: email,
            companyName: companyName,
            description: description,
        };
        console.log(invoiceFormData);
        // You can perform further actions with the invoice form data, such as sending it to the backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Invoice Details</legend>

                <label htmlFor="address">
                    Address:
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>

                <label htmlFor="amount-of-participants">
                    Amount of Participants:
                    <input
                        type="number"
                        name="amountOfParticipants"
                        id="amount-of-participants"
                        value={amountOfParticipants}
                        onChange={(e) => setAmountOfParticipants(parseInt(e.target.value))}
                    />
                </label>

                <label htmlFor="products">
                    Products:
                    <select
                        name="products"
                        id="products"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                        <option value="">Select a product</option>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>
                    </select>
                </label>

                <label htmlFor="invoice-address">
                    Invoice Address:
                    <input
                        type="text"
                        name="invoiceAddress"
                        id="invoice-address"
                        value={invoiceAddress}
                        onChange={(e) => setInvoiceAddress(e.target.value)}
                    />
                </label>

                <label htmlFor="frequency-of-sessions">
                    Frequency of Sessions (optional):
                    <input
                        type="text"
                        name="frequencyOfSessions"
                        id="frequency-of-sessions"
                        value={frequencyOfSessions}
                        onChange={(e) => setFrequencyOfSessions(e.target.value)}
                    />
                </label>

                <label htmlFor="terms-of-condition">
                    <input
                        type="checkbox"
                        name="termsOfCondition"
                        checked={termsOfCondition}
                        onChange={() => setTermsOfCondition(!termsOfCondition)}
                    />
                    Agree to Terms of Condition
                </label>
            </fieldset>

            <fieldset>
                <legend>Contact Information</legend>

                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="company-name">
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        id="company-name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </label>

                <label htmlFor="description">
                    Description:
                    <textarea
                        name="description"
                        id="description"
                        rows="4"
                        cols="40"
                        placeholder="Enter the description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
}

export default InvoiceForm;