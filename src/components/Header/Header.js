import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../Button/Button";

function Header({ isAuth, openLoginOverlay }) {
    return (
        <div>
            <div className="outerContainer">
                <nav className="innerContainer navigation">
                    <ul className="nav-ul-top">
                        <li className="nav-li-top">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active-nav-link' : 'default-nav-link'
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-li-top">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active-nav-link' : 'default-nav-link'
                                }
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-li-top">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active-nav-link' : 'default-nav-link'
                                }
                                to="/products"
                            >
                                Products
                            </NavLink>
                        </li>
                        {isAuth && (
                            <>
                                <li className="nav-li-top">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/profile"
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="nav-li-top">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/studygroup"
                                    >
                                        StudyGroup
                                    </NavLink>
                                </li>
                                <li className="nav-li-top">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/review"
                                    >
                                        Review
                                    </NavLink>
                                </li>
                                <li className="nav-li-top">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/messageboard"
                                    >
                                        MessageBoard
                                    </NavLink>
                                </li>
                                <li className="nav-li-top">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/messages"
                                    >
                                        Messages
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {!isAuth && (
                            <li className="nav-li-top">
                                <button className="login-button" onClick={openLoginOverlay}>
                                    Login
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="outerContainer, heroSection">
                <section className="innerContainer headerSection">
                    <div>
                        <h1>Giving your college the best level of digital knowledge.</h1>
                        <p>
                            We offer different services to help everyone get to the next level of digital knowledge.
                        </p>
                        <Button>Learn More</Button>
                    </div>
                    <img src="" alt="logo" />
                </section>
            </div>
        </div>
    );
}

export default Header;