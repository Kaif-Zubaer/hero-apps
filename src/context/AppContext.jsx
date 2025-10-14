import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const loadFromStorage = () => {
  const data = localStorage.getItem('installedApps');
  return data && JSON.parse(data);
};

const saveToStorage = (apps) => {
  localStorage.setItem('installedApps', JSON.stringify(apps));
};

export const AppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = loadFromStorage();
    if (storedApps) {
      setInstalledApps(storedApps);
    }
  }, []);

  const installApp = (app) => {
    setInstalledApps(prev => {
      const alreadyExists = prev.some(item => item.id === app.id);

      if (!alreadyExists) {
        const updated = [...prev, app];
        saveToStorage(updated);
        return updated;
      }

      return prev;
    });
  };

  const uninstallApp = (id) => {
    setInstalledApps(prev => {
      const updated = prev.filter(app => app.id !== id);
      saveToStorage(updated);
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{ installedApps, installApp, uninstallApp }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
