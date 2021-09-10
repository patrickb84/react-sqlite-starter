import { useLocation } from 'react-router';

const { createContext, useContext } = require('react');

const AppContext = createContext({});

const AppContextProvider = props => {
  let location = useLocation();

  const value = {
    currentPath: location.pathname,
    onHomePage: location.pathname === '/',
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
