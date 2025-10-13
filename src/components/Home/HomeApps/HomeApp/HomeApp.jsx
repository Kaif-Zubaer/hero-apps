import React from 'react';
import './HomeApp.css'
import { formatNumber } from '../../../../utility/formetNumber';
import downloadIcon from '../../../../assets/cloud-arrow-down-solid-full.svg'
import starIcon from '../../../../assets/star-solid-full.svg'

const HomeApp = ({appData}) => {
        const { image, title, downloads, ratingAvg } = appData;

    return (
         <div className='app-card'>
                <img className='app-img' src={image} alt="" />
                <h2 className='app-title'>{title}</h2>
                <div className='app-div'>
                    <p className='app-downloads'>
                        <img src={downloadIcon} alt="" />
                        {formatNumber(downloads)}
                    </p>
                    <p className='app-rating'>
                        <img src={starIcon} alt="" />
                        {ratingAvg}
                    </p>
                </div>
        </div>
    );
};

export default HomeApp;