import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Home from "../Home/Home";
import ItemPage from "../ItemPage/ItemPage";
import { links } from "../../utils/Utils";
import Cart from "../Cart/Cart";
import Checkout from "../Chechkout/Checkout";
import Success from "../Success/Success";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={`/${links.catalog}`} component={Catalog} />
        <Route path={`/${links.catalog}/:id`} component={ItemPage} />
        <Route exact path={`/${links.blog}`} component={Blog} />
        <Route exact path={`/${links.cart}`} component={Cart} />
        <Route exact path={`/${links.checkout}`} component={Checkout} />
        <Route exact path={`/${links.success}`} component={Success} />
      </Switch>
    </div>
  );
};

const Blog = () => {
  return <div>Blog Goes Here</div>;
};

export default PageContent;
