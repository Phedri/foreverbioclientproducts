import React from "react";

import Header from "./components/layout/Header";
import Advertising from "./components/layout/Advertising";
import Footer from "./components/layout/Footer";

import ListProducts from "./components/products/ListProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <Advertising />
      <ListProducts />
      <Footer />
    </div>
  );
}

export default App;
