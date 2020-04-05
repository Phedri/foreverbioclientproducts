import React, { Component } from "react";

import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
  };

  fetchProducts = () => {
    axios.get("http://localhost:9092/product").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
