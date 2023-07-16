import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="outerContainer">
            <section className="innerContainer afterElement">
                <h3 className="titleOfSection">My experience in the Health care.</h3> {/*titleOfSection komt uit benefits.css*/}
                <p className="bigFont">
                    Healthcare workers often lack the necessary <strong>digital skills</strong> to adapt to the rapidly evolving technology in their field. Here is where i want to make my contribution.
                </p>
                <p className="smallFont">
                    Implement comprehensive digital skills <strong>training programs</strong> that equip healthcare workers with the knowledge and confidence to navigate digital tools and systems custom for you're organization.
                </p>
                <p className="smallFont">
                    Introduce integrated communication platforms that enable <strong>seamless collaboration</strong> and information sharing amongst healthcare teams, improving patient outcomes and streamlining workflows.
                </p>
            </section>
        </div>
    );
}

export default Services;