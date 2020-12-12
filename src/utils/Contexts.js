import React from "react";
import { Provider } from "react-redux";
import store from "./context/store";

const GlobalContextProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { GlobalContextProvider };
