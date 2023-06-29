//todo ruud!

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudyGroup.css';
import Product from "../../components/Product/Product";
import authContext from "../../context/AuthContext";

function StudyGroup() {
    const [studyGroups, setStudyGroups] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authorities, setAuthorities] = useState([]);

    async function fetchUserAuthorities() {
        const response = await axios.get(`http://localhost:8080/users/${localStorage.getItem('userId')}/authorities`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );

        setAuthorities(response.data);
    }

    useEffect(() => {
        fetchUserAuthorities();
    }, []);

    useEffect(() => {
        if (authorities.some(authority => authority.authority === 'ROLE_ADMIN')) {
            fetchAllStudyGroups();
        } else if (authorities.some(authority => authority.authority === 'ROLE_COACH')) {
            fetchCoachStudyGroups();
        } else if (authorities.some(authority => authority.authority === 'ROLE_USER')) {
            fetchUserStudyGroups();
        }
    },[authorities]);

    // Fetch the study groups for a USER
    const fetchUserStudyGroups = async () => {
        try {
            const response = await axios.get('http://localhost:8080/study-group', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setStudyGroups(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching user study groups:', error);
        }
    };

    // Fetch the study groups for a COACH
    const fetchCoachStudyGroups = async () => {
        try {
            const response = await axios.get('http://localhost:8080/study-group/by-product/{id}' , {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setStudyGroups(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching coach study groups:', error);
        }
    };

    // Fetch all study groups for an ADMIN
    const fetchAllStudyGroups = async () => {
        try {
            const response = await axios.get('http://localhost:8080/study-group' , {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            setStudyGroups(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching all study groups:', error);
        }
    };

    return (
        <div className="studyContainer">
            {loading ? (
                <p>Loading study groups...</p>
            ) : (
                <div>
                    {studyGroups.map((studyGroup) => (
                        <div key={studyGroup.groupId}>

                            <p>Study Group Name: {studyGroup.groupName}</p>
                             <Product product={studyGroup.product} />
                            {authorities.some(authority => authority.authority === 'ROLE_USER' && (
                                <div>

                                </div>
                            ))}
                            {authorities.some(authority => authority.authority === 'ROLE_ADMIN' && (
                                <div>

                                </div>
                            ))}
                            {authorities.some(authority => authority.authority === 'ROLE_COACH' && (
                                <div>

                                </div>
                            ))}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default StudyGroup;