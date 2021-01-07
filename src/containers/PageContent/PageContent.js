import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Home from "../Home/Home";
import ItemPage from "../ItemPage/ItemPage";
import { links } from "../../utils/Utils";
import Cart from "../Cart/Cart";
import Checkout from "../Chechkout/Checkout";
import Success from "../Success/Success";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

const PageContent = () => {
  const isSignedIn = true;
  return (
    <div>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          isSignedIn={isSignedIn}
          component={Home}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.catalog}`}
          isSignedIn={isSignedIn}
          component={Catalog}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          path={`/${links.catalog}/:id`}
          isSignedIn={isSignedIn}
          component={ItemPage}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.blog}`}
          isSignedIn={isSignedIn}
          component={Blog}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.cart}`}
          isSignedIn={isSignedIn}
          component={Cart}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.checkout}`}
          isSignedIn={isSignedIn}
          component={Checkout}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.success}`}
          isSignedIn={isSignedIn}
          component={Success}
          elseRedirectTo={`${links.signIn}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.signIn}`}
          isSignedIn={!isSignedIn}
          component={SignIn}
          elseRedirectTo={`${links.home}`}
        />
        <ProtectedRoute
          exact
          path={`/${links.signUp}`}
          isSignedIn={!isSignedIn}
          component={SignUp}
          elseRedirectTo={`${links.home}`}
        />
      </Switch>
    </div>
  );
};

const Blog = () => {
  return <div>Blog Goes Here</div>;
};

export default PageContent;
