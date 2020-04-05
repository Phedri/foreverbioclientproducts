import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import ListProducts from "./components/products/ListProducts";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/details/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <ListProducts />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/detail">
            <ProductDetail />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
