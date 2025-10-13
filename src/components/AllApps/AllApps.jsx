import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import './AllApps.css'
import HomeApp from '../Home/HomeApps/HomeApp/HomeApp';
import appError from '../../assets/App-Error.png';

const AllApps = () => {
    const appsData = useLoaderData();
    const [search, setSearch] = useState('');

    const searchedApps = search ?
        appsData.filter(appData =>
            appData.title?.toLowerCase().includes(search.toLocaleLowerCase())
        ) : appsData;

    return (
        <div className='all-apps'>
            <h1 className='all-apps-title'>Our All Applications</h1>
            <p className='all-apps-description'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='all-apps-div'>
                <h3 className='all-apps-num'>({searchedApps.length}) Apps Found</h3>
                <p>
                    <input
                        className='all-apps-search'
                        type="search"
                        name=""
                        id=""
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search' />
                </p>
            </div>
            <div className={`${searchedApps.length > 0 ? 'all-apps-container' : 'app-not-found'}`}>
                {
                    searchedApps.length > 0 ?
                        searchedApps.map(appData => <HomeApp key={appData.id} appData={appData}></HomeApp>)
                        :
                        <div className='app-error'>
                            <img src={appError} alt="" />
                            <h1 className='app-error-title'>OPPS!! APP NOT FOUND</h1>
                            <p className='app-error-description'>The App you are requesting is not found on our system.  please try another apps</p>
                            <NavLink to='/'>
                                <button className='app-error-btn'>Go Back!</button>
                            </NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllApps;