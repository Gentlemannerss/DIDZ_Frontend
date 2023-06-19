import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../Button/Button";
import './Header.css';


function Header({ openLoginOverlay, handleLogout, isAuth }) {
    return (
        <div>
            <div className="outerContainer">
                <nav className="innerContainer navigation">
                    <ul className="">
                        <li className="">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active-nav-link' : 'default-nav-link'
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'active-nav-link' : 'default-nav-link'
                                }
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="">
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
                                <li className="">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/profile"
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/studygroup"
                                    >
                                        StudyGroup
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/review"
                                    >
                                        Review
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/messageboard"
                                    >
                                        MessageBoard
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'active-nav-link' : 'default-nav-link'
                                        }
                                        to="/messages"
                                    >
                                        Messages
                                    </NavLink>
                                </li>
                                <li className="">
                                    <Button
                                        clickHandler={handleLogout}
                                        buttonText={'Logout'}
                                    />
                                </li>
                            </>
                        )}
                        {!isAuth && (
                            <li className="">
                                <Button
                                    buttonText={'Login'}
                                    className={'login-button'}
                                    buttonType={Button}
                                    clickHandler={openLoginOverlay}
                                />
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="outerContainer, heroSection">
                <section className="innerContainer, heroContent">
                    <div className="textContainer">
                        <h1>Giving your college the next digital levelgi.</h1>
                        <p>
                            We offer different services to help everyone get to the next level of digital knowledge.
                        </p>
                        <Button
                            buttonText={'Learn More'}
                            className={'learn-more'}
                            buttonType={Button}
                            // todo add link to product page
                        />
                    </div>
                    <img src="" alt="logo" />
                </section>
            </div>
        </div>
    );
}

export default Header;