import React, { Component } from "react";

import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetailNumber: 0,
  };

  handleDetail = (num) => {
    // this.setState({ productDetailNumber: num });
    console.log("hello from handle detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
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
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
