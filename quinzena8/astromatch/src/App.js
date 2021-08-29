import React from "react";
import Header from "./components/Header";
import CartaoTinder from "./components/CartaoTinder.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <CartaoTinder />
          </Route>
          <Route path="/chats"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
