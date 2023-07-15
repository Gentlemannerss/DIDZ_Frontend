import React from 'react';
import Button from "../Button/Button";
import './Header.css';
import { useNavigate} from 'react-router-dom';
import logo from '../../assets/Logo.webp';

function Header() {
    const navigate = useNavigate();
    return (
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
                            clickHandler= {() => navigate('/products')}
                        />
                    </div>
                    <img src={logo} alt="logo" className="logo" />
                </section>
            </div>
    );
}

export default Header;