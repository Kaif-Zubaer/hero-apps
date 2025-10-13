import './HomeApps.css'
import HomeApp from './HomeApp/HomeApp';
import { NavLink } from 'react-router';

const HomeApps = ({ appsData }) => {
    return (
        <div className='home-apps-section'>
            <h1 className='home-apps-title'>Trending Apps</h1>
            <p className='home-apps-description'>Explore All Trending Apps on the Market developed by us</p>
            <div className='home-apps-container'>
                {
                    appsData.slice(0, 8).map(appData => <HomeApp key={appData.id} appData={appData}></HomeApp>)
                }
            </div>
            <NavLink to='apps'>
                <button className='all-apps-btn'>Show all</button>
            </NavLink>
        </div>
    );
};

export default HomeApps;