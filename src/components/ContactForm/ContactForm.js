import React, { useState } from 'react';
import './ContactForm.css';
import Button from "../Button/Button";

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
                <legend>What is you're information</legend>

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
                <br/>
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
                <br/>
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
                <br/>
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
                <legend>Description</legend>

                <label htmlFor="description">
                    Please leave a description:
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
                <br/>
                <label htmlFor="terms-of-condition">
                    <input
                        type="checkbox"
                        name="termsOfCondition"
                        checked={termsOfCondition}
                        onChange={() => setTermsOfCondition(!termsOfCondition)}
                    />
                    Agree to Terms of Condition
                </label>
                <br/>
                <Button
                    buttonType={'submit'}
                    buttonText={'Submit'}
                    className={'submitForm'}
                />
            </fieldset>
        </form>
    );
}

export default ContactForm;