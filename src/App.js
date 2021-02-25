import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Points from "./components/Points";
import History from "./components/History";

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/rewards-store" component={Home} />
      </Switch>
      <Switch>
        <Route path="/rewards-store/points" component={Points} />
      </Switch>
      <Switch>
        <Route path="/rewards-store/history" component={History} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
