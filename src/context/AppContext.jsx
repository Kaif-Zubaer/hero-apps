import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);

    const installApp = (app) => {
        setInstalledApps(prev => prev.find(p => p.id === app.id) ? prev : [...prev, app]);
    };

    const uninstallApp = (id) => {
        setInstalledApps(prev => prev.filter(app => app.id !== id));
    };

    return (
        <AppContext.Provider value={{ installedApps, installApp, uninstallApp }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);