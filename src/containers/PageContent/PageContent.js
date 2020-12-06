import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};

export const Catalog = () => {
  return <div>Catalog Goes Here</div>;
};

export const Blog = () => {
  return <div>Blog Goes Here</div>;
};

export default PageContent;
