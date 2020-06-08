import React, { Component } from "react";

import axios from "axios";

import _ from "lodash";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    copyProducts: [],
    detailProduct: {},
    nomCat: "",
    cart: [],
    cartSubTotal: 0,
    currentPage: 1,
    productsPerPage: 8,
    recommandationProducts: [],
    bestSellers: [],
    user: JSON.parse(localStorage.getItem('user')) || null,
  };


  getInitialState= async() => {
    var products = JSON.parse(localStorage.getItem( 'products' )) || 1;
    var copyProducts = JSON.parse(localStorage.getItem( 'copyProducts' )) || 1;
    var detailProduct = JSON.parse(localStorage.getItem( 'detailProduct' )) || 1;
    var nomCat = JSON.parse(localStorage.getItem( 'nomCat' )) || 1;
    var cart = JSON.parse(localStorage.getItem( 'cart' )) || 1;
    var user = JSON.parse(localStorage.getItem( 'user' )) || 1;
    var cartSubTotal = localStorage.getItem( 'cartSubTotal' )|| 1;
    var currentPage = JSON.parse(localStorage.getItem( 'currentPage' )) || 1;
    var productsPerPage = JSON.parse(localStorage.getItem( 'productsPerPage' )) || 1;
    var recommandationProducts = JSON.parse(localStorage.getItem( 'recommandationProducts' )) || 1;
    var bestSellers = JSON.parse(localStorage.getItem('bestSellers' )) || 1;

    this.setState({

      cart: cart,
      cartSubTotal: cartSubTotal,

    })
   
};

  componentDidUpdate(prevProps, prevState) {
    const storeDetailProduct = JSON.parse(
      localStorage.getItem("detailProduct")
    );
    if (!_.isEqual(prevState.detailProduct, storeDetailProduct)) {
      this.setState({
        detailProduct: storeDetailProduct,
      });

      console.log(this.state.recommandationProducts);
    }
  }

  addAttributes = () => {
    this.state.products.forEach((product) => {
      product.count = 1;
      product.total = product.prix * product.count;
      if (
        product.etat === "Rupture de stock" ||
        product.etat === "Approvisionnement"
      ) {
        product.count = 0;
      }
    });
  };

  connectUser = async (email,password) => {
    let res = await axios.post("http://localhost:8080/signIn",{
      email: email,
      password: password,
    });
    let user = res.data;
    this.setState({
      user: user,
    });
    console.log(this.state.user);
    localStorage.setItem('user',JSON.stringify(user));

    if (user!== null && user !== ""){
      console.log("the user is not null")
      return true;
    }
    console.log("the user is null")
    return false;
  }

  signUpUser = async (email,firstName,lastName,password,birthDate,url) => {
    await axios.post("http://localhost:8080/user",{
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName,
      birthDate:birthDate,
      url:url,
      role:"Utilisateur"
    }).then((data)=>{
      this.connectUser(email,password);
    });
  }

  disconnectUser = async  () => {
    localStorage.setItem('user',null);

  }

  fetchProducts = async () => {
    let res = await axios.get("http://localhost:8080/product");
    let products = res.data;
    this.setState({
      products: products,
      copyProducts: products,
      currentPage: 1,
    });
    this.addAttributes();
    this.fetchBestSellers();
    return products;
  };

  fetchBestSellers = () => {
    let bestSellers = this.state.products.sort((a, b) => {
      if (a.nbVentes > b.nbVentes) return -1;
      if (a.nbVentes < b.nbVentes) return 1;
      return 0;
    });

    bestSellers = bestSellers.slice(0, 4);

    this.setState({ bestSellers });
  };

  addCommande = (commande) => {
    console.log("tried to add command");
    axios.post("http://localhost:8080/users/22/commandes", 
      commande
    );
    localStorage.setItem("cart", JSON.stringify([]));
    this.setState({
      cart: [],
    })
  }
  

  searchProduct = (e, search) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/product/search", {
        text: search,
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      });
  };

  sortDateDesc = () => {
    const products = this.state.products.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    });

    this.setState({ products });
  };

  sortDateAsc = () => {
    const products = this.state.products.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });

    this.setState({ products });
  };

  sortPrixDesc = () => {
    const products = this.state.products.sort((a, b) => {
      if (a.prix > b.prix) return -1;
      if (a.prix < b.prix) return 1;
      return 0;
    });

    this.setState({ products });
  };

  sortPrixAsc = () => {
    const products = this.state.products.sort((a, b) => {
      if (a.prix < b.prix) return -1;
      if (a.prix > b.prix) return 1;
      return 0;
    });

    this.setState({ products });
  };

  filterProductsByIdCat = (idCat) => {
    this.setState({ currentPage: 1 });
    const productsFiltered = this.state.copyProducts.filter(
      (product) => product.idCat === idCat
    );
    this.setState({ products: productsFiltered });
    // this.calculatePages();
  };

  fetchRecommandationProducts = (idCat, idProd, products) => {
    let recommandationProducts = products.filter(
      (product) => product.idCat === idCat
    );

    recommandationProducts = recommandationProducts.filter(
      (product) => product.id !== idProd
    );

    this.setState({ recommandationProducts });
  };




  componentDidMount = async () => {
    this.getInitialState();
    const products = await this.fetchProducts();
    console.log(products);
    const storeDetailProduct = JSON.parse(
      localStorage.getItem("detailProduct")
    );
    if (!_.isEmpty(storeDetailProduct)) {
      this.fetchRecommandationProducts(
        storeDetailProduct.idCat,
        storeDetailProduct.id,
        products
      );
    }

    console.log(this.state.recommandationProducts);
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      localStorage.setItem("detailProduct", JSON.stringify(product));
      return { detailProduct: product };
    });
  };

  cartToCommande = () => {
    var commande = {
      paymentMethod: "A la livraison",
      listLigneCommande: [],
    }
    this.state.cart.map((product) => {
      commande.listLigneCommande.push({
        idProduit: product.id,
        qte: product.count,

      })
    });
    console.log(commande);
    return commande;
  }
  
  addToCart = (id) => {
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
        if (this.state.cart.length > 0) {
          localStorage.setItem("cart", JSON.stringify([...this.state.cart, product]));
          console.log([...this.state.cart, product]);
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }

        localStorage.setItem("cart", JSON.stringify([ product]));
            return { products: tempProducts, cart: [product] };
        
      },
      () => {
        //every time we add an element in the cart, we'll callback the function to calculate the totals
        this.addTotals();
      }
    );
      console.log(this.state.cart);
    
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    // removedProduct.inCart = false;
    // removedProduct.count = 0;
    // removedProduct.total = 0;

    this.setState(
      () => {
        localStorage.setItem("cart", JSON.stringify([...tempCart]));


        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
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

  increment = (id) => {
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

  decrement = (id) => {
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
    this.state.cart.map((item) => (subTotal += item.total));

    this.setState(() => {
      localStorage.setItem("cartSubTotal", subTotal);
      return {
        cartSubTotal: subTotal,
      };
    });
  };

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  calculatePages = () => {
    const indexOfLastProduct =
      this.state.currentPage * this.state.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage;
    const currentProducts = this.state.products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return currentProducts;
  };

  render() {
    const currentProducts = this.calculatePages();
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          currentProducts: currentProducts,
          sortDateAsc: this.sortDateAsc,
          sortDateDesc: this.sortDateDesc,
          sortPrixAsc: this.sortPrixAsc,
          sortPrixDesc: this.sortPrixDesc,
          fetchRecommandationProducts: this.fetchRecommandationProducts,
          paginate: this.paginate,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          removeItem: this.removeItem,
          increment: this.increment,
          decrement: this.decrement,
          searchProduct: this.searchProduct,
          fetchProducts: this.fetchProducts,
          filterProductsByIdCat: this.filterProductsByIdCat,
          addCommande: this.addCommande,
          cartToCommande: this.cartToCommande,
          connectUser: this.connectUser,
          disconnectUser: this.disconnectUser,
          signUpUser: this.signUpUser,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
