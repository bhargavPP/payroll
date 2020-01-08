import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Login from "./Login";
import NotFound from "./NotFound";
import Taluka from "./Taluka";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Menu" component={Menu} exect></Route>
        <Route path="/" component={Login}></Route>
        <Route path="/Taluka" components={{ main: Taluka, sidebar: Menu }} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
