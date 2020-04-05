import React, { Component } from "react";

import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    nomCat: "",
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

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };

  checkCategory = () => {
    const { idCat } = this.state.detailProduct;
    if (idCat === 1) {
      this.setState({ nomCat: "Visage" });
    } else if (idCat === 2) {
      this.setState({ nomCat: "Cheveux" });
    } else if (idCat === 3) {
      this.setState({ nomCat: "Huile" });
    } else if (idCat === 4) {
      this.setState({ nomCat: "Peau" });
    } else if (idCat === 5) {
      this.setState({ nomCat: "Aliment" });
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
