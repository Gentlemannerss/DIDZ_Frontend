import React, { useState } from 'react';
import './ContactForm.css';
import Button from "../Button/Button";
import axios from "axios";

function ContactForm() {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [termsOfCondition, setTermsOfCondition] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        setIsLoading(true);

        const contactFormData = {
            companyName: companyName,
            name: name,
            phoneNumber: phoneNumber,
            eMail: email,
            description: description,
            termsOfCondition: termsOfCondition,
        };
        console.log(contactFormData)
        try {
            const response = await axios.post(`http://localhost:8080/contactform`, contactFormData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log("Contact form data submitted:", response.data);
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    }

    return (
        <form onSubmit={submitForm}>
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
                    Please leave a description: <br/>
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