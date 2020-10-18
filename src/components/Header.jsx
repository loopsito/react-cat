import React from 'react';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.svg';
import profilePic from '../assets/static/profile.png'

const Header = () => (
    <header className="header">
            <img className="header__img" src={logo} alt="CatFinder Logotipo"/>
            <nav className="header__nav">
                <ul className="header__nav--ul">
                    <li><a href="#">Categories</a></li>
                    <li><a href="">Gifs</a></li>
                    <li><a href="">Videos</a></li>
                </ul>
            </nav>






            {/* <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={profilePic} alt="User icon"/>
                    <p>Profile</p>
                </div>
                <ul>
                    <li><a href="/">Account</a></li>
                    <li><a href="/">Log out</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>
            </div> */}
    </header>
);

export default Header;