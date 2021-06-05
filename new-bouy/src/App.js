import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Resources from "./Components/Resources";
import Civilian from "./Components/Civilian";
import Vetrean from "./Components/Vetrean";
import Firstresponder from "./Components/Firstresponder";
import Chat from "./Components/Chat";
import Storefront from "./Components/Storefront";
import Cart from "./Components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/civ">
            <Civilian />
          </Route>
          <Route path="/vet">
            <Vetrean />
          </Route>
          <Route path="/first">
            <Firstresponder />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/store">
            <Storefront />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Resources />
            {/* null because must be last and promise mute anything below it*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
