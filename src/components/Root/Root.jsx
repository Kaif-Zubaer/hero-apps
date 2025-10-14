import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import './Root.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

const Root = () => {
    const navigation = useNavigation();
    const  isLoading =navigation.state==='loading'
    return (
        <div className='root'>
            <Navbar></Navbar>
            {isLoading && <LoadingAnimation></LoadingAnimation>}
            <main className='content'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;