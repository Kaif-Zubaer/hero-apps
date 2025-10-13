import React from 'react';
import Banner from './Banner/Banner';
import HomeApps from './HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <HomeApps appsData={appsData}></HomeApps>
        </div>
    );
};

export default Home;