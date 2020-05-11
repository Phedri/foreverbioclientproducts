import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import ListProducts from "./components/products/ListProducts";
import ListFavoris from "./components/products/ListFavoris";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/details/ProductDetail";
import SignIn from "./components/profile/SignIn";
import SignUp from "./components/profile/SignUp";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
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
            <Route path="/Favoris">
              <ListFavoris />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/SignIn">
              <SignIn/>
            </Route>
          </Switch>

          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
