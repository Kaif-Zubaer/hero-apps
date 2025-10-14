import React from 'react';
import './LoadingAnimation.css'

const LoadingAnimation = () => {
    return (
        <div>
            <div className="loading-overlay">
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
};

export default LoadingAnimation;