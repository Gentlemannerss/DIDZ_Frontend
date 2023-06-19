import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import fetchData from '../../utils/fetchData';

function Profile() {
    const { user, logout } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm();

    const [userData, setUserData] = useState({
        photo: null,
        name: null,
        birthday: null,
        gender: null,
        phone: null,
        homeAddress: null,
        workAddress: null,
        billingInfo: null,
        privateEmail: null,
        workEmail: null
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData("localhost:8080/users", setUserData, setIsLoading, setError, []);
    }, []);

    async function onSubmit(data) {
        setIsLoading(true);
        try {
            const response = await axios.put("localhost:3000/users", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).catch(e => e.code === "ERR_CANCELED" && console.log("Fetch Request Cancelled"));

            console.log(response);

            if (response.data.email !== userData.email) {
                logout();
            } else {
                setUserData(response.data);
                setError(null);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profileContainer">
                <div className="profilePicture">
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
                <div className="sectionList">
                    <h5>Profile</h5>
                    <ul>
                        <li>Basic Info:</li>
                        <ul>
                            <li>
{/*
                                <input type="text" name="photo" ref={register} placeholder="Photo" />
*/}
                            </li>
                            <li>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name || ''}
                                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                />
                            </li>
                            <li>
                                <label htmlFor="birthday">Birthday:</label>
                                <input
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    value={userData.birthday || ''}
                                    onChange={(e) => setUserData({ ...userData, birthday: e.target.value })}
                                />
                            </li>
                            <li>
                                <label htmlFor="gender">Gender:</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={userData.gender || ''}
                                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
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
                                    value={userData.phone || ''}
                                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
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
                                    value={userData.homeAddress || ''}
                                    onChange={(e) => setUserData({ ...userData, homeAddress: e.target.value })}
                                />
                            </li>
                            <li>
                                <label htmlFor="workAddress">Work Address:</label>
                                <input
                                    type="text"
                                    id="workAddress"
                                    name="workAddress"
                                    value={userData.workAddress || ''}
                                    onChange={(e) => setUserData({ ...userData, workAddress: e.target.value })}
                                />
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="sectionList">
                    <h5>Account</h5>
                    <ul>
                        <li>
                            <label htmlFor="billingInfo">Billing Information:</label>
                            <input
                                type="text"
                                id="billingInfo"
                                name="billingInfo"
                                value={userData.billingInfo || ''}
                                onChange={(e) => setUserData({ ...userData, billingInfo: e.target.value })}
                            />
                        </li>
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
                                value={userData.privateEmail || ''}
                                onChange={(e) => setUserData({ ...userData, privateEmail: e.target.value })}
                            />
                        </li>
                        <li>
                            <label htmlFor="workEmail">Work Email:</label>
                            <input
                                type="email"
                                id="workEmail"
                                name="workEmail"
                                value={userData.workEmail || ''}
                                onChange={(e) => setUserData({ ...userData, workEmail: e.target.value })}
                            />
                        </li>
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
            <button type="submit">Submit</button>
        </form>
    );
}

export default Profile;
