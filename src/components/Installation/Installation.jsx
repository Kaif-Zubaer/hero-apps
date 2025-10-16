import React, { useState } from 'react';
import './Installation.css';
import { useAppContext } from '../../context/AppContext';
import { formatNumber } from '../../utility/formetNumber';
import downloadIcon from '../../assets/cloud-arrow-down-solid-full.svg'
import starIcon from '../../assets/star-solid-full.svg'
import { toast, ToastContainer } from 'react-toastify';

const SORT_OPTIONS = [
    { label: 'Size (Low to High)', value: 'asc' },
    { label: 'Size (High to Low)', value: 'desc' }
];

const Installation = () => {
    const { installedApps, uninstallApp } = useAppContext();
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedApps = [...installedApps].sort((a, b) => {
        return sortOrder === 'asc' ? a.size - b.size : b.size - a.size;
    });

    return (
        <div className='installed-app'>
            <h1 className='installed-app-title'>Your Installed Apps</h1>
            <p className='installed-app-description'>Explore All Trending Apps on the Market developed by us</p>
            <div className='installed-app-count'>
                <h3 className='installed-app-num'>{installedApps.length} Apps Found</h3>
                <select className='installed-app-sort' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    {
                        SORT_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }
                </select>
            </div>
            {
                sortedApps.map(app => (
                    <div className='installed-app-card' key={app.id}>
                        <div className='installed-app-card-left'>
                            <img className='installed-app-card-img' src={app.image} alt="" />
                            <div className='installed-app-details'>
                                <h3 className='installed-app-name'>{app.title}</h3>
                                <div className='installed-app-stats'>
                                    <div className='installed-app-stats-manage'>
                                        <img className='installed-app-stats-img' src={downloadIcon} alt="" />
                                        <p className='installed-app-downloads'>{formatNumber(app.downloads)}</p>
                                    </div>
                                    <div className='installed-app-stats-manage'>
                                        <img className='installed-app-stats-img' src={starIcon} alt="" />
                                        <p className='installed-app-rating'>{app.ratingAvg}</p>
                                    </div>
                                    <p className='installed-app-size'>{app.size} MB</p>
                                </div>
                            </div>
                        </div>
                        <button className='uninstall-btn' onClick={() => {
                            uninstallApp(app.id);
                            toast.warn('UnInstalled', {
                                position: "top-center",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            });
                        }}>
                            Uninstall
                        </button>
                    </div>
                ))
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;