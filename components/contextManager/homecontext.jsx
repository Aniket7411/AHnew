import { createContext, useState } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [headerData, setHeaderData] = useState({});

  return (
    <HomeContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
