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
            const response = await axios.put("/users", data, {
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
                                <input type="text" name="photo" ref={register} placeholder="Photo" />
                            </li>
                            <li>
                                <input type="text" name="name" ref={register} placeholder="Name" />
                            </li>
                            <li>
                                <input type="text" name="birthday" ref={register} placeholder="Birthday" />
                            </li>
                            <li>
                                <input type="text" name="gender" ref={register} placeholder="Gender" />
                            </li>
                        </ul>
                        <li>Contact Info:</li>
                        <ul>
                            <li>
                                <input type="text" name="phone" ref={register} placeholder="Phone" />
                            </li>
                        </ul>
                        <li>Address Info:</li>
                        <ul>
                            <li>
                                <input type="text" name="homeAddress" ref={register} placeholder="Home" />
                            </li>
                            <li>
                                <input type="text" name="workAddress" ref={register} placeholder="Work" />
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="sectionList">
                    <h5>Account</h5>
                    <ul>
                        <li>
                            <input
                                type="text"
                                name="billingInfo"
                                ref={register}
                                placeholder="Billing Information"
                            />
                        </li>
                    </ul>
                </div>
                <div className="sectionList">
                    <h5>Emails</h5>
                    <ul>
                        <li>
                            <input type="email" name="privateEmail" ref={register} placeholder="Private Email" />
                        </li>
                        <li>
                            <input type="email" name="workEmail" ref={register} placeholder="Work Email" />
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
