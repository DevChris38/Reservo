import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "./useLocalStorage";

export const InfosContext = createContext();

export function InfoProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("user", null);
  const login = (userInfo) => {
    setUserData(userInfo);
    window.location.reload();
  };

  const contextValue = useMemo(() => {
    return { login, userData };
  }, [userData]);

  return (
    <InfosContext.Provider value={contextValue}>
      {children}
    </InfosContext.Provider>
  );
}

export const useInfosContext = () => useContext(InfosContext);

InfoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
