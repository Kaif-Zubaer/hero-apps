import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { formatNumber } from '../../utility/formetNumber';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import './AppDetails.css'

const AppDetails = () => {
    const appsData = useLoaderData();

    const { id } = useParams();
    const convertedId = parseInt(id);

    const appData = appsData.find(data => data.id === convertedId);

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appData;

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
                            <h1 className='app-stats-num,'>{formatNumber(reviews)}</h1>
                        </div>
                    </div>
                    <button className='install-btn'>Install Now ({size} MB)</button>
                </div>
            </div>
            <div>



            </div>
            <div className='description-section'>
                <h1 className='description-lable'>Description</h1>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;