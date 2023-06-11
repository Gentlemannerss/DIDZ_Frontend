import React from 'react';
import "./OwnerInfo.css";

function OwnerInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer">
                <div className="imageContainer">
                    <img
                        className="coachImage"
                        src="https://via.placeholder.com/150"
                        alt="Digicoach Close Up"
                    />
                    <div className="imageOverlay"></div>
                </div>
                <div className="informationToTheRight">
                    <div className="infoAboutTile">
                        <h3>Your Name</h3>
                    </div>
                    <div className="segmentsContainer">
                        <div className="leftSegment">
                            <h4>Coding Languages</h4>
                            <ul>
                                <li>Language 1</li>
                                <li>Language 2</li>
                                <li>Language 3</li>
                            </ul>
                            <h4>Microsoft Skills</h4>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </div>
                        <div className="rightSegment">
                            <h4>Work Experience</h4>
                            <ul>
                                <li>Company 1 - Position</li>
                                <li>Company 2 - Position</li>
                                <li>Company 3 - Position</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OwnerInfo;