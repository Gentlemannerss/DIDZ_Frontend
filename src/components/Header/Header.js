import React from 'react';
import { NavLink } from 'react-router-dom';

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
                        <h1>Getting your college to the next digital level</h1>
                        <p>
                            Here we will make every colleague known in the digital world of your organization
                        </p>
                        {/* Button component goes here */}
                    </div>
                    <img src="" alt="logo" />
                </section>
            </div>
        </div>
    );
}

export default Header;