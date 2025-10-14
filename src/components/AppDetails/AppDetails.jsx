import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { formatNumber } from '../../utility/formetNumber';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import './AppDetails.css'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppContext } from '../../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';


const AppDetails = () => {
    const appsData = useLoaderData();

    const { id } = useParams();
    const convertedId = parseInt(id);

    const appData = appsData.find(data => data.id === convertedId);

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appData;

    const { installApp, installedApps } = useAppContext();

    const handleInstall = () => {
        const isAlreadyInstalled = installedApps.some(app => app.id === appData.id);

        if (isAlreadyInstalled) {
            toast.error('Already Installed', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            installApp(appData);
            toast.success('Installed', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className='app-details-container'>
            <div className='app-details-top'>
                <div className='app-detail-img-div'>
                    <img className='app-detail-img' src={image} alt="" />
                </div>
                <div className='app-details-top-container'>
                    <div className='app-name'>
                        <div className='app-name-card'>
                            <h1 className='app-name-title'>{title}</h1>
                            <p className='app-dev'>Developed by <span className='app-dev-name'>{companyName}</span></p>
                        </div>
                    </div>
                    <div className='app-stats'>
                        <div className='app-stats-download'>
                            <img className='app-stats-img' src={downloadIcon} alt="" />
                            <p className='app-stats-lable'>Downloads</p>
                            <h1 className='app-stats-num'>{formatNumber(downloads)}</h1>
                        </div>
                        <div className='app-stats-rating'>
                            <img className='app-stats-img' src={ratingIcon} alt="" />
                            <p className='app-stats-lable'>Average Ratings</p>
                            <h1 className='app-stats-num'>{ratingAvg}</h1>
                        </div>
                        <div className='app-stats-review'>
                            <img className='app-stats-img' src={reviewIcon} alt="" />
                            <p className='app-stats-lable'>Total Reviews</p>
                            <h1 className='app-stats-num'>{formatNumber(reviews)}</h1>
                        </div>
                    </div>
                    <button onClick={handleInstall} className='install-btn'>Install Now ({size} MB)</button>
                </div>
            </div>
            <div className='rating-section'>
                <h1 className='rating-title'>Rating</h1>
                <div className='bar-chart'>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart layout='vertical' data={ratings} barCategoryGap={16}>
                            <XAxis type="number"></XAxis>
                            <YAxis type="category" dataKey='name' ></YAxis>
                            <Tooltip></Tooltip>
                            <Bar dataKey='count' fill='#FF8811'></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
            <div className='description-section'>
                <h1 className='description-lable'>Description</h1>
                <p className='description'>{description}</p>
            </div>
            <ToastContainer />
        </div>

    );
};

export default AppDetails;