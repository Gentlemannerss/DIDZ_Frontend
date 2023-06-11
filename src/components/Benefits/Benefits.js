import React from 'react';
import "./Benefits.css";

function Benefits() {
    return (
        <div className="outerContainer">
            <section className="innerContainer benefits">
                <h4>Benefits of a Digicoach</h4>
                <div className="cardContainer">
                    <div className="card">
                        <i className="fa fa-icon-1"></i>
                        <h4>Benefit 1</h4>
                        <p>Text about Benefit 1</p>
                    </div>
                    <div className="card">
                        <i className="fa fa-icon-2"></i>
                        <h4>Benefit 2</h4>
                        <p>Text about Benefit 2</p>
                    </div>
                    <div className="card">
                        <i className="fa fa-icon-3"></i>
                        <h4>Benefit 3</h4>
                        <p>Text about Benefit 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefits;