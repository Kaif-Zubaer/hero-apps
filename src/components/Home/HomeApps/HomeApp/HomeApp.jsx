import React from 'react';
import './HomeApp.css'
import { formatNumber } from '../../../../utility/formetNumber';

const HomeApp = ({appData}) => {
        const { image, title, downloads, ratingAvg } = appData;

    return (
         <div className='app-card'>
                <img className='app-img' src={image} alt="" />
                <h2 className='app-title'>{title}</h2>
                <div className='app-div'>
                    <p className='app-downloads'>
                        <img src="" alt="" />
                        {formatNumber(downloads)}
                    </p>
                    <p className='app-rating'>
                        <img src="" alt="" />
                        {ratingAvg}
                    </p>
                </div>
        </div>
    );
};

export default HomeApp;