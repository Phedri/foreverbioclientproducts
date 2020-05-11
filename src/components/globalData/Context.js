import React, { Component } from "react";

import axios from "axios";
import Authentification from "../profile/Authentification";

const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    favorisProduct :[],
    products: [],
    copyProducts: [],
    detailProduct: {},
    user:[],
    nomCat: "",
    idUser:0,
    cart: [],
    cartSubTotal: 0,
    currentPage: 1,
    productsPerPage: 8,
    recommandationProducts: [],
    bestSellers: [],
    id:0,
    email:"",
  };


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

  fetchProducts = () => {
    axios.get("http://localhost:9092/product").then((res) => {
      const products = res.data;
      this.setState({
        products: products,
        copyProducts: products,
        currentPage: 1,
      });

      this.addAttributes();
      this.fetchBestSellers();


    });
  };

  fetchFavoris = () => {

    axios.get("http://localhost:9092/User/3").then((res) => {
      const favoris = res.data;
      this.setState({
        favorisProduct: favoris,
      });
      console.log(this.state.favorisProduct);
      this.addAttributes();
      this.fetchBestSellers();
    });
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
  AddFavoris = (id) =>{
    console.log(this.state);
    axios.post('http://localhost:9092/favoris',{
      idUser: this.state.idUser,
      id : id
    })
        .then(response =>{
          console.log(response)

        })
        .catch(error =>{
          console.log(error)
        })}
  DeleteFavoris = (id) =>{
    console.log(this.state);
    axios.post('http://localhost:9092/favoris',{
      id : id
    })
        .then(response =>{
          console.log(response)

        })
        .catch(error =>{
          console.log(error)
        })}



  changerHandler = e =>{

    this.setState({[e.target.name]:e.target.value})
  }

  searchProduct = (e, search) => {
    e.preventDefault();
    axios
      .post("http://localhost:9092/product/search", {
        text: search,
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      });

  };

  userByEmail =(email) => {
    axios.get('http://localhost:9092/find/'+ email )
        .then((res) => {
          const User = res.data;
          this.setState({user:User});
          console.log(this.state.user);
          console.log(this.state.user.id);
          console.log("UserId avant:")
          console.log(this.state.idUser)
          Authentification.successfulSignUp(this.state.user.id);
          this.setState({
            idUser: localStorage.getItem('idUser'),
          });
          console.log("UserId:")
          console.log(this.state.idUser)
        });
  };
  Passed = () =>{
    console.log("passsed")
    this.userByEmail(this.state.email);
}
  submitHandler = (firstname,lastname,age,email,password) =>{
    console.log(this.state);
    axios.post('http://localhost:9092/user',{
      firstname:firstname,
      lastname:lastname,
      age:age,
      email:email,
      password:password,

    })
        .then(response =>{
          console.log(response)
          Authentification.SaveEmail(email);
          this.setState({
            email: localStorage.getItem('email'),
          });
          console.log("Email:")
          console.log(this.state.email)
          this.Passed()
        })
        .catch(error =>{
          console.log(error)
        })
  }

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

  fetchRecommandationProducts = (idCat, idProd) => {
    let recommandationProducts = this.state.copyProducts.filter(
      (product) => product.idCat === idCat
    );

    recommandationProducts = recommandationProducts.filter(
      (product) => product.id !== idProd
    );

    this.setState({ recommandationProducts });
  };

  componentDidUpdate = () => {
    this.calculatePages();
  };

  componentDidMount = () => {
    this.fetchProducts();
    this.fetchFavoris();

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
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        //every time we add an element in the cart, we'll callback the function to calculate the totals
        this.addTotals();
      }
    );
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
        return {
          cart: [...tempCart],
          products: [...tempProducts],
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
          AddFavoris :this.AddFavoris,
          fetchFavoris :this.fetchFavoris,
          DeleteFavoris :this.DeleteFavoris,
          submitHandler :this.submitHandler,
          userByEmail :this.userByEmail,
          Passed : this.Passed,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
