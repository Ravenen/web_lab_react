import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Home from "../Home/Home";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};

const Blog = () => {
  return <div>Blog Goes Here</div>;
};

export default PageContent;
