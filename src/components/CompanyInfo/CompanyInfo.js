import React from 'react';
import "./CompanyInfo.css";

function CompanyInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer companyContainer"> {/*classnames hebben geen comma ertussen, wel een spatie!!*/}
                <div className="leftSection">
                    <h3>Company Name</h3>
                    <p>Company Info
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores quibusdam sequi tenetur veniam! Dolore expedita laboriosam magnam modi molestiae nemo sapiente totam velit! Facere!
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