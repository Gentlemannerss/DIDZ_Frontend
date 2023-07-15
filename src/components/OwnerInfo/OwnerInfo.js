import React from 'react';
import './OwnerInfo.css';
import ownerImage from '../../assets/Owner.webp';

function OwnerInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer ownerinfo">
                <div className="imageContainer">
                    <img
                        className="ownerImage"
                        src={ownerImage}
                        alt="Digicoach Close Up"
                    />
                    <div className="imageOverlay"></div>
                </div>
                <div className="">
                    <div className="infoAboutTile">
                        <h3>Damon van Bergen</h3>
                    </div>
                    <div className="segmentsContainer">
                        <div className="leftSegment">
                            <h4>Coding Languages</h4>
                            <ul>
                                <li>Java</li>
                                <li>SpringBoot</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>HTML & CSS</li>
                            </ul>
                        </div>
                        <div className="centerLeftSegment">
                            <h4>Microsoft Skills</h4>
                            <ul>
                                <li>OneDrive & SharePoint</li>
                                <li>Word, Excel & PowerPoint</li>
                                <li>Azure & Web Dynamics</li>
                            </ul>
                        </div>
                        <div className="centerRightSegment">
                            <h4>Coaching Skills</h4>
                            <ul>
                                <li>Active Listening</li>
                                <li>Feedback & Reflection</li>
                                <li>Motivation & Support</li>
                                <li>Communication & Empathy</li>
                            </ul>
                        </div>
                        <div className="rightSegment">
                            <h4>Work Experience</h4>
                            <ul>
                                <li>Severinus - Digicoach</li>
                                <li>Belastingdienst - Duaal HBO-IT</li>
                                <li>Axians - Traineeship Microsoft Dynamics </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OwnerInfo;