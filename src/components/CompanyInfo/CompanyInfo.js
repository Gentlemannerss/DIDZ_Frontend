import React from 'react';
import "./CompanyInfo.css";

function CompanyInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer companyContainer"> {/*classnames hebben geen comma ertussen, wel een spatie!!*/}
                <div className="leftSection">
                    <h3>Digicoach in de Zorg</h3>
                    <p className="subtitle">Who are we and what are our values:</p>
                    <p>
                        Introducing Digicoach in de Zorg: Empowering Healthcare Professionals without Digital Expertise.

                        At Digicoach in de Zorg, we understand the critical role healthcare professionals play in providing quality care to patients.
                        We also recognize the challenges they face when adapting to the ever-evolving digital landscape.
                        That's why we have assembled a team of dedicated digital coaches who are passionate about bridging the gap between technology and healthcare.

                        Led by Damon van Bergen, a former healthcare professional with a wealth of experience spanning over a decade, our team brings a unique perspective and firsthand understanding of the healthcare industry.
                        Damon's journey began at the age of 15 when he embarked on a fulfilling career in healthcare, working tirelessly across various domains, including elderly care, disability support, and rehabilitation services.
                        Unfortunately, I was in a car accident that abruptly changed the course of my life.

                        With unwavering determination, Damon embarked on a new path in the digital world, recognizing the transformative power of technology in optimizing healthcare delivery.
                        Inspired by his personal experiences, he sought to contribute by empowering healthcare professionals with the necessary digital skills and knowledge to excel in their roles.
                    </p>
                </div>
                <div className="rightSection">
                    <img
                        className="companyImage"
                        src="https://via.placeholder.com/300"
                        alt="Company Group Photo"
                    />
                </div>
            </section>
        </div>
    );
}

export default CompanyInfo;