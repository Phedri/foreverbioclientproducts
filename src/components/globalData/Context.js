import React, { Component } from "react";

import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    nomCat: "",
    cart: [],
    cartSubTotal: 0
  };

  addAttributes = () => {
    this.state.products.forEach(product => {
      product.count = 1;
      product.total = product.prix * product.count;
      if (
        product.etat === "Rupture de stock" ||
        product.etat === "Approvisionnement"
      ) {
        product.count = 0;
      }
    });
    console.log(this.state.products);
  };

  fetchProducts = () => {
    axios.get("http://localhost:9092/product").then(res => {
      const products = res.data;
      this.setState({ products });
      this.addAttributes();
    });
  };

  searchProduct = (e, search) => {
    e.preventDefault();
    axios
      .post("http://localhost:9092/product/search", {
        text: search
      })
      .then(res => {
        const products = res.data;
        this.setState({ products });
      });
  };

  filterProductsByIdCat = idCat => {
    this.state.products.filter(product => product.idCat === idCat);
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log("hello from add to cart");
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // product.inCart = true;
    // product.count = 1;
    // const prix = product.prix;
    // product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        //every time we add an element in the cart, we'll callback the function to calculate the totals
        this.addTotals();
      }
    );
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    // removedProduct.inCart = false;
    // removedProduct.count = 0;
    // removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        // this.addTotals();
      }
    );
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

  increment = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    if (product.count < product.qte) {
      product.count += 1;
      product.total = product.count * product.prix;
    }

    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    if (product.count > 1) {
      product.count -= 1;
      product.total = product.count * product.prix;
    }

    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));

    this.setState(() => {
      return {
        cartSubTotal: subTotal
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          removeItem: this.removeItem,
          increment: this.increment,
          decrement: this.decrement,
          searchProduct: this.searchProduct,
          fetchProducts: this.fetchProducts
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
