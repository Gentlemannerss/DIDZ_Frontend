import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudyGroup.css';
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

function StudyGroup() {
    const [studyGroups, setStudyGroups] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [users, setUsers] = useState([]);
    const [coaches, setCoaches] = useState([]);
    const [selectedCoach, setSelectedCoach] = useState({});
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [groupname, setGroupname] = useState('');
    const [loading, setLoading] = useState(true);
    const [authorities, setAuthorities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllProducts();
        fetchAllUsers();
    }, []);

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


    const fetchUserStudyGroups = async () => {
        try {

            const response = await axios.get(`http://localhost:8080/study-group/by-user/${localStorage.getItem('userId')}`, {
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
            const response = await axios.get('http://localhost:8080/study-group', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setStudyGroups(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching all study groups:', error);
        }
    };

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products' , {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching all products:', error);
        }
    }

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users' , {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            setUsers(response.data);
            response.data.filter(user => user.authorities.some(authority => authority.authority === 'ROLE_COACH'))
                .map(coach => setCoaches(coaches => [...coaches, coach]));
            setLoading(false);
        } catch (error) {
            console.log('Error fetching all users:', error);
        }
    }

    const createStudyGroup = async () => {
        try {
            const response = await axios.post('http://localhost:8080/study-group', {
                groupName: groupname,
                productId: selectedProduct,
                userIds: selectedUsers
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setStudyGroups(response.data);
            setLoading(false);
            window.location.reload();
        } catch (error) {
            console.log('Error creating study group:', error);
        }
    }

    return (
        <div className="outerContainer studyContainer">
            {console.log(studyGroups)}
            <div className="innerContainer">
                {loading ? (
                    <p>Loading study groups...</p>
                ) : (
                    <div>
                        {studyGroups.length > 0 && studyGroups.map((studyGroup) => (
                            <div key={studyGroup.groupId}>

                                <p>Study Group Name: {studyGroup.groupName}</p>
                                 <Product product={studyGroup.product} />
                                {authorities.some(authority => authority.authority === 'ROLE_USER' && (
                                    <div>

                                    </div>
                                ))}
                                {authorities.some(authority => authority.authority === 'ROLE_ADMIN') && (
                                    <div>
                                        {/*todo: create a delete studyGroup for ADMIN*/}
                                    </div>
                                )}
                                {authorities.some(authority => authority.authority === 'ROLE_COACH' && (
                                    <div>
                                        {/*todo: create a update studyGroup for COACH*/}
                                    </div>
                                ))}

                                <Button
                                    type="button"
                                    buttonText={"Go to Message Board"}
                                    className={"messageBoardButton"}
                                    clickHandler={() => navigate(`/messageboard/${studyGroup.groupId}`)}
                                />
                            </div>
                        ))}
                    </div>
                )}
                {authorities.some(authority => authority.authority === 'ROLE_ADMIN') && (
                    <div className="createStudyGroup">
                        <form>
                            <label htmlFor="study-group-name">Study Group Name:</label>
                            <input
                                type="text"
                                id="groupname"
                                value={groupname}
                                onChange={(e) => setGroupname(e.target.value)}
                            />

                            <label htmlFor="product">
                                Product:
                                <select
                                    name="product"
                                    id="product"
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                >
                                    <option value="">Select a product</option>
                                    {products.map((product) => (
                                        <option key={product.productId} value={product.productId}>
                                            {product.productName}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            {/*<label htmlFor="coach">Coach:</label>
                            <select
                                id="coach"
                                value={selectedCoach}
                                onChange={(e) => setSelectedCoach(e.target.value)}
                            >
                                <option value="">Select a coach</option>
                                {coaches.map((coach) => (
                                    <option key={coach.userId} value={coach.userId}>
                                        {coach.fullName}
                                    </option>
                                ))}
                            </select>*/}

                            <label htmlFor="users">
                                Users:
                                <select
                                    name="users"
                                    id="users"
                                    value={selectedUsers}
                                    onChange={(e) => setSelectedUsers(Array.from(e.target.selectedOptions, (option) => option.value))}
                                    multiple
                                >
                                    <option value="">Select users</option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.fullName}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <button type="button" onClick={createStudyGroup}>Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudyGroup;