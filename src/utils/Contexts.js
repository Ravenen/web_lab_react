import React, { createContext, useContext, useReducer } from "react";
import { garlandInitialState, garlandReducer } from "./Reducer";

const GlobalContext = createContext();
const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children, value }) => {
  const [state, dispatch] = useReducer(garlandReducer, garlandInitialState);

  return (
    <GlobalContext.Provider
      value={{
        garlands: state.garlands,
        dispatch,
        ...value,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, useGlobalContext };
