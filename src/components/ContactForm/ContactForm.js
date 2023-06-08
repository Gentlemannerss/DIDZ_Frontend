import React, { useState } from 'react';

function ContactForm() {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [termsOfCondition, setTermsOfCondition] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const contactFormData = {
            companyName: companyName,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            description: description,
            termsOfCondition: termsOfCondition,
        };
        console.log(contactFormData);
        // Make here the further action to my own Backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Company Details</legend>

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

                <label htmlFor="contact-name">
                    Contact Name:
                    <input
                        type="text"
                        name="name"
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="phone-number">
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phone-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
            </fieldset>

            <fieldset>
                <legend>Contact Description</legend>

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

                <label htmlFor="terms-of-condition">
                    <input
                        type="checkbox"
                        name="termsOfCondition"
                        checked={termsOfCondition}
                        onChange={() => setTermsOfCondition(!termsOfCondition)}
                    />
                    Agree to Terms of Condition
                </label>

                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default ContactForm;