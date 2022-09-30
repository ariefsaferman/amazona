import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div>
        <header>
          <a href="/">2 + 2 != 5</a>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/product/:slug">
              <ProductScreen />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
