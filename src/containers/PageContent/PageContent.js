import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Home from "../Home/Home";
import ItemPage from "../ItemPage/ItemPage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ItemPage} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};

const Blog = () => {
  return <div>Blog Goes Here</div>;
};

export default PageContent;
