import React from "react";
import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/civ"></Route>

          <Route path="/vet"></Route>

          <Route path="/first"></Route>

          <Route path="/chat"></Route>

          <Route path="/store"></Route>

          <Route path="/">
          <Header />
            {/* null because must be last and promise mutes anything below it*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
