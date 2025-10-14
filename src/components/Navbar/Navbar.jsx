import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import gitImg from '../../assets/github-brands-solid-full.svg';
import barIcon from '../../assets/bars-solid-full.svg';
import { NavLink } from 'react-router';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='navbar'>
            <div className='navbar-left-section'>
                <img className='bar-icon' src={barIcon} alt="menu" onClick={toggleMenu} />
                <NavLink className='navbar-left' to='/'>
                    <div className='navbar-left'>
                        <img className='navbar-logo-img' src={logo} alt="" />
                        <h1 className='navbar-brand-title'>HERO.IO</h1>
                    </div>
                </NavLink>
            </div>

            <div className={`navbar-middle ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink className='link-deco' to='/'><li>Home</li></NavLink>
                    <NavLink className='link-deco' to='apps'><li>Apps</li></NavLink>
                    <NavLink className='link-deco' to='installation'><li>Installation</li></NavLink>
                </ul>
            </div>

            <div className='navbar-right'>
                <a className='navbar-btn-link' href="https://github.com/Kaif-Zubaer" target='_blank'>
                    <button className='navbar-btn'>
                        <img src={gitImg} alt="" />
                        Contribute
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
