import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import './AllApps.css';
import HomeApp from '../Home/HomeApps/HomeApp/HomeApp';
import appError from '../../assets/App-Error.png';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

const AllApps = () => {
    const appsData = useLoaderData();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredApps, setFilteredApps] = useState(appsData);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            const filtered = search
                ? appsData.filter(app =>
                    app.title?.toLowerCase().includes(search.toLowerCase()))
                : appsData;

            setFilteredApps(filtered);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [search, appsData]);

    return (
        <div className='all-apps'>
            <h1 className='all-apps-title'>Our All Applications</h1>
            <p className='all-apps-description'>
                Explore All Apps on the Market developed by us. We code for Millions
            </p>
            <div className='all-apps-div'>
                <h3 className='all-apps-num'>({filteredApps.length}) Apps Found</h3>
                <p>
                    <input
                        className='all-apps-search'
                        type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search'
                    />
                </p>
            </div>
            <div className={`${filteredApps.length > 0
                ? 'all-apps-container'
                : 'app-not-found'}`}>
                {
                    loading
                        ? (<LoadingAnimation></LoadingAnimation>)
                        : filteredApps.length > 0
                            ? (
                                filteredApps.map(appData => (
                                    <HomeApp key={appData.id} appData={appData} ></HomeApp>
                                ))
                            )
                            : (
                                <div className='app-error'>
                                    <img src={appError} alt="App Not Found" />
                                    <h1 className='app-error-title'>OOPS!! APP NOT FOUND</h1>
                                    <p className='app-error-description'>
                                        The App you are requesting is not found on our system. Please try another app.
                                    </p>
                                    <NavLink to='/'>
                                        <button className='app-error-btn'>Go Home!</button>
                                    </NavLink>
                                </div>
                            )
                }
            </div>
        </div>
    );
};

export default AllApps;