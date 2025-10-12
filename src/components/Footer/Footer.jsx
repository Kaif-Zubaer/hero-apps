import React from 'react';
import logoImg from '../../assets/logo.png'
import facebookImg from '../../assets/square-facebook-brands-solid-full.svg'
import twitterImg from '../../assets/square-x-twitter-brands-solid-full.svg'
import whatsappImg from '../../assets/square-whatsapp-brands-solid-full.svg'
import emailImg from '../../assets/envelope-solid-full.svg'
import instaImg from '../../assets/square-instagram-brands-solid-full.svg'
import linkedinImg from '../../assets/linkedin-brands-solid-full.svg'
import './Footer.css'
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-top-left'>
                        <div className='footer-logo'>
                            <NavLink className='footer-logo-nav'>
                                <img className='logo-img' src={logoImg} alt="" />
                                <h3 className='footer-title'>HERO.IO</h3>
                            </NavLink>
                        </div>
                        <p className='footer-description'>Crafting innovative apps that make everyday life simpler, smarter, and more exciting. <br /> Turning ideas into powerful digital experiences.</p>
                    </div>
                    <div className='footer-top-right'>
                        <h3 className='footer-lable'>Social Links</h3>
                        <div className='footer-social-links'>
                            <a href="https://www.facebook.com/" target='blank'><img src={facebookImg} alt="" /></a>
                            <a href="https://www.instagram.com/" target='blank'><img src={instaImg} alt="" /></a>
                            <a href="https://www.whatsapp.com/" target='blank'><img src={whatsappImg} alt="" /></a>
                            <a href="https://workspace.google.com/intl/en-US/gmail/" target='blank'><img src={emailImg} alt="" /></a>
                            <a href="https://x.com/" target='blank'><img src={twitterImg} alt="" /></a>
                            <a href="https://www.linkedin.com/" target='blank'><img src={linkedinImg} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-botton-left'>
                        <p className='footer-rigts'>Copyright © 2025 - All right reserved</p>
                    </div>
                    <div className='footer-bottom-right'>
                        <a className='footer-link' href="">Privacy Policy</a>
                        <a className='footer-link' href="">Terms of Service</a>
                        <a className='footer-link' href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;