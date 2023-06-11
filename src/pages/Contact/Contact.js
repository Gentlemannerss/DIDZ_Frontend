import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import OwnerInfo from "../../components/OwnerInfo/OwnerInfo";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";

function Contact() {
    return (
        <div>
            <OwnerInfo />
            <CompanyInfo />
            <ContactForm />
        </div>
    );
}

export default Contact;