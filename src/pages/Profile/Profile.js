import React from 'react';
import "./Profile.css";

function Profile() {
    return (
        <div className="profileContainer">
            <div className="profilePicture">
                <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <div className="sectionList">
                <h5>Profile</h5>
                <ul>
                    <li>Basic Info:</li>
                    <ul>
                        <li>Photo</li>
                        <li>Name</li>
                        <li>Birthday</li>
                        <li>Gender</li>
                    </ul>
                    <li>Contact Info:</li>
                    <ul>
                        <li>Phone</li>
                    </ul>
                    <li>Address Info:</li>
                    <ul>
                        <li>Home</li>
                        <li>Work</li>
                    </ul>
                </ul>
            </div>
            <div className="sectionList">
                <h5>Account</h5>
                <ul>
                    <li>Billing Information</li>
                </ul>
            </div>
            <div className="sectionList">
                <h5>Emails</h5>
                <ul>
                    <li>Private Email</li>
                    <li>Work Email</li>
                    <li>Delete All Emails</li>
                    <li>Block Accessibility</li>
                </ul>
            </div>
            <div className="sectionList">
                <h5>Security</h5>
                <ul>
                    <li>Reset Password</li>
                    <li>Other Security Options</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;