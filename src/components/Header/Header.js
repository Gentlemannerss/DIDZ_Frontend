import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../Button/Button";
import './Header.css';


function Header({ openLoginOverlay, handleLogout, isAuth }) {
    return (
        <>
            <nav className="outerContainer navigation">
                <div className="innerContainer">
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
                                        buttonText='Logout'
                                    />
                                </li>
                            </>
                        )}
                        {!isAuth && (
                            <li className="">
                                <Button
                                    buttonText='Login'
                                    className='login-button'
                                    buttonType='button'
                                    clickHandler={openLoginOverlay}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            <div className="outerContainer, heroSection">
                <section className="innerContainer, heroContent">
                    <div className="textContainer">
                        <h1>Giving your college the next digital level up!</h1>
                        <p>
                            We offer different services to help any level of digital college.
                        </p>
                        <Button
                            buttonText='Learn More'
                            className='learn-more'
                            buttonType='button'
                            // todo add link to product page (maby clickhandler?)
                        />
                    </div>
                    <img src="" alt="logo" />
                </section>
            </div>
        </>
    );
}

export default Header;