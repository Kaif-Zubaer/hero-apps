import React from 'react';
import heroImg from '../../../assets/hero.png'
import playStoreImg from '../../../assets/google-play_6124997.png'
import appStoreImg from '../../../assets/app-store_5977575.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <h1 className='banner-title'>We Build <br /><span className='banner-title-dif'>Productive</span> Apps</h1>
            <p className='banner-description'>
                At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='apps-store-btns'>
                <a href="https://play.google.com/store/games?device=windows" target='blank'>
                    <button className='apps-store-btn'>
                        <img className='apps-store-img' src={playStoreImg} alt="" />
                        Google Play
                    </button>
                </a>
                <a href="https://www.apple.com/app-store/" target='blank'>
                    <button className='apps-store-btn'>
                        <img className='apps-store-img' src={appStoreImg} alt="" />
                        App Store
                    </button>
                </a>
            </div>
            <div className='hero-img'>
                <img src={heroImg} alt="" />
            </div>
            <div className='trust-bar-section'>
                <div className='trust-bar'>
                    <h1 className='trust-bar-title'>Trusted by Millions, Built for You</h1>
                    <div className='trust-bar-stats'>
                        <div className='stats-card'>
                            <p className='stats-card-lable'>Total Downloads</p>
                            <h1 className='stats-card-value'>29.6M</h1>
                            <p className='stats-card-description'>21% more than last month</p>
                        </div>
                        <div className='stats-card'>
                            <p className='stats-card-lable'>Total Reviews</p>
                            <h1 className='stats-card-value'>906K</h1>
                            <p className='stats-card-description'>46% more than last month</p>
                        </div>
                        <div className='stats-card'>
                            <p className='stats-card-lable'>Active Apps</p>
                            <h1 className='stats-card-value'>132+</h1>
                            <p className='stats-card-description'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;