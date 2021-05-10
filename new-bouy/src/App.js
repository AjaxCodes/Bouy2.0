import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Resources from "./Components/Resources";
import Civilian from "./Components/Civilian";
import Vetrean from "./Components/Vetrean";
import Firstresponder from "./Components/Firstresponder";
import Chat from "./Components/Chat";
import Storefront from "./Components/Storefront";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/civ">
            <Header />
            <Civilian />
          </Route>

          <Route path="/vet">
            <Header />
            <Vetrean />
          </Route>

          <Route path="/first">
            <Header />
            <Firstresponder />
          </Route>

          <Route path="/chat">
            <Header />
            <Chat />
          </Route>

          <Route path="/store">
            <Header />
            <Storefront/>
          </Route>

          <Route path="/">
            <Header />
            <Resources />
            {/* null because must be last and promise mutes anything below it*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
