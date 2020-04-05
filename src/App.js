import React from "react";

import Header from "./components/layout/Header";
import Advertising from "./components/layout/Advertising";
import Footer from "./components/layout/Footer";

import BestSellers from "./components/products/BestSellers";

function App() {
  return (
    <div className="App">
      <Header />
      <Advertising />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default App;
