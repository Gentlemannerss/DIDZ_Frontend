import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from "../Button/Button";
import './Navigation.css'


function Header({ openLoginOverlay, handleLogout, isAuth }) {

    return (
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
                                        to="/invoice"
                                    >
                                        Invoices
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
    );
}

export default Header;