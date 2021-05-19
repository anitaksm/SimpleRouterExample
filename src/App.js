import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routeExperiment from "./routeExperiment";
import ciscoExperiment from "./ciscoExperiment";
import LinksComp from "./LinksComp"

function App() {
  return (
    <div>

      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LinksComp}/>
      <Route exact path="/routeExperiment" component={routeExperiment}/>
      <Route exact path="/ciscoExperiment" component={ciscoExperiment}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
