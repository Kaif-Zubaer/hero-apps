import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import './Root.css'

const Root = () => {
    return (
        <div className='root'>
            <Navbar></Navbar>
            <main className='content'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;