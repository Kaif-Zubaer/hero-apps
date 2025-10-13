import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import error404 from '../../assets/error-404.png'
import './ErrorPage.css'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <Navbar></Navbar>
            <div className='error'>
                <img className='error-img' src={error404} alt="" />
                <h1 className='error-title'>Oops, page not found!</h1>
                <p className='error-description'>The page you are looking for is not available.</p>
                <NavLink to='/'>
                    <button className='error-btn'>Go Home!</button>
                </NavLink>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;