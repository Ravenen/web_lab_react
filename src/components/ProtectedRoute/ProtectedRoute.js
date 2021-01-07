import React from "react";
import { Redirect, Route } from "react-router-dom";
import { links } from "../../utils/Utils";

const ProtectedRoute = ({
  isSignedIn,
  component: Component,
  elseRedirectTo,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={() => {
        if (isSignedIn) {
          return <Component />;
        } else {
          return <Redirect to={elseRedirectTo} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
