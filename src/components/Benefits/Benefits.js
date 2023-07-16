import React from 'react';
import "./Benefits.css";

function Benefits() {
    return (
        <div className="outerContainer benefitsAfter">
            <section className="innerContainer benefits">
                <h4 className="titleOfSection">What can a Digicoach do for you're organization?</h4>
                <div className="cardContainer">
                    <div className="card">
                        <h4>Personalized and Continuous Support</h4>
                        <p>A digital coach can provide personalized guidance and support to individuals in a healthcare organization witt lesser digital experience.</p>
                    </div>
                    <div className="card">
                        <h4>Anywhere & Anytime</h4>
                        <p>Digital coaches can provide guidance and support to individuals anytime and anywhere. This accessibility enables workers to get help anywhere and let them spend time where it is needed.</p>
                    </div>
                    <div className="card">
                        <h4>Data-driven Insights</h4>
                        <p>A Digicoach collects and analyze data on individuals behavior, usage and application knowledge. This data will let you guide you're organization into the next step of your digital evolution. </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefits;