import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Button from "../../components/Button/Button";
import "./Profile.css";
import stockProfilePicture from "../../assets/stockProfile.webp";

function Profile() {
    const { user, logout } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const { register, handleSubmit } = useForm();


    const [userData, setUserData] = useState({
        photo: '',
        name: '',
        birthday: '',
        gender: '',
        phone: '',
        homeAddress: '',
        workAddress: '',
        billingInfo: '',
        privateEmail: '',
        profilePicUrl: '',
        workEmail: '',
        newPassword: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        void getUserData();
    }, []);

    async function getUserData() {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/users/${localStorage.getItem("userId")}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUserData(response.data);
            console.log(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function submitData(data) {
        setIsLoading(true);
        console.log(data);
        try {
            const response = await axios.put(
                `http://localhost:8080/users/${localStorage.getItem("userId")}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            console.log(response.data);
            console.log(response);

            setUserData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }


    /*
    //todo: make a function to handle only the password change
    async function resetPassword() {
        console.log(userData.newPassword)
        try {
            // Make the reset password request
            await axios.put(`http://localhost:8080/passwordrequest/${localStorage.getItem("userId")}`, {
                newPassword: userData.newPassword
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Handle success or update the necessary state variables
            console.log("Password reset successful.");
        } catch (error) {
            // Handle error or updatethe necessary state variables
            console.log("Failed to reset password:", error);
        }
    }*/

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    useEffect(() => {
        console.log("de userData: ");
        console.log(userData);
    }, [userData]);

    async function sendImage(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                `http://localhost:8080/uploadprofilepic/${localStorage.getItem("userId")}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            setUserData({
                ...userData,
                profilePicUrl: response.data,
            });

            console.log("dit is wat ik krijg van de backend");
            console.log(response);

        } catch (error) {
            console.log("Failed to upload profile picture:", error);
        }
    }

    async function getImage() {
        try {
            const response = await axios.get(
                `http://localhost:8080/downloadprofilepic/${localStorage.getItem("userId")}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            console.log(response.data);
            console.log(response)
            setPreviewUrl(response.data)
        } catch (error) {
            console.log("Failed to get profile picture:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div className="profileContainer">
                <div className="profilePicture">
                    {previewUrl ? (
                        <img src={previewUrl} alt="Profile" />
                    ) : (
                        <img src={ userData.profilePicUrl || stockProfilePicture } alt="Profile" />
                    )}
                    <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
                    <Button
                        buttonType="button"
                        buttonText="Change Profile Picture"
                        clickHandler={sendImage}
                    />
                </div>
                <div className="sectionList">
                    <h5>Profile</h5>
                    <ul>
                        <li>Basic Info:</li>
                        <ul>
                            <li>
                                <label htmlFor="userName">Name:</label>
                                <input
                                    type="text"
                                    id="userName"
                                    placeholder={userData.username}
                                    disabled={true}
                                    {...register("username")}
                                />
                            </li>
                            <li>
                                <label htmlFor="fullName">Full Name:</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder={userData.fullName}
                                    {...register("fullName")}
                                />
                            </li>
                            <li>
                                <label htmlFor="birthday">Birthday:</label>
                                <input
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    placeholder={'use format: yyyy-mm-dd'}
                                    {...register("dateOfBirth")}
                                />
                            </li>
                            <li>
                                <label htmlFor="gender">Gender:</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    placeholder={userData.gender}
                                    {...register("gender")}
                                />
                            </li>
                        </ul>
                        <li>Contact Info:</li>
                        <ul>
                            <li>
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder={userData.phoneNumber}
                                    {...register("phoneNumber")}
                                />
                            </li>
                        </ul>
                        <li>Address Info:</li>
                        <ul>
                            <li>
                                <label htmlFor="homeAddress">Home Address:</label>
                                <input
                                    type="text"
                                    id="homeAddress"
                                    name="homeAddress"
                                    placeholder={userData.address}
                                    {...register("address")}
                                />
                            </li>
                            <li>
                                <label htmlFor="companyAddress">Work Address:</label>
                                <input
                                    type="text"
                                    id="companyAddress"
                                    name="companyAddress"
                                    placeholder={userData.companyAddress}
                                    {...register("companyAddress")}
                                />
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="sectionList">
                    <h5>Emails</h5>
                    <ul>
                        <li>
                            <label htmlFor="privateEmail">Private Email:</label>
                            <input
                                type="email"
                                id="privateEmail"
                                name="privateEmail"
                                placeholder={userData.privateEmail}
                                {...register("privateEmail")}
                            />
                        </li>
                        <li>
                            <label htmlFor="workEmail">WorkEmail:</label>
                            <input
                                type="email"
                                id="workEmail"
                                name="workEmail"
                                placeholder={userData.workEmail}
                                {...register("workEmail")}
                            />
                        </li>
                    </ul>
                </div>
                <div className="sectionList">
                    <h5>Security</h5>
                    <ul>
                        <li>Reset Password</li>
                        <li>
                            <label htmlFor="newPassword">New Password:</label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder="Enter your new password"
                                {...register("newPassword")}
                            />
                        </li>
                        <Button
                            buttonType="button"
                            buttonText="Reset Password"
                            disabled={true}
                            className="disabledButton"
                            /*clickHandler={resetPassword}*/
                        />
                        <li>Currently no other Security options</li>
                    </ul>
                </div>
            </div>
            <button
                type='submit'
            >
                Save
            </button>
        </form>
    );
}

export default Profile;