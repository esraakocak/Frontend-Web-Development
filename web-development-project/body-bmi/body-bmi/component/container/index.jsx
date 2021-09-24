import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeProvider } from "../../contexts/HomeContext";
import Home from "../../screens/Home/index";

export default function Container() {
  return (
    <div>
      <Switch>
        <HomeProvider>
          <Route path="/" component={Home} />
        </HomeProvider>
      </Switch>
    </div>
  );
  }