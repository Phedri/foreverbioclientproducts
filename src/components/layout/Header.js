import React, { Component , StrictMode} from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";
import { Button, } from 'reactstrap';
import Popover from '@material-ui/core/Popover';
import SimplePopOver from '../popover'
import Example from '../popover';

export default class Header extends Component {

  state = {
    search: "",


  };

  handleOnChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };




  render() {
    return (
      <>
      <ProductConsumer>
      {(value) => {
                        return (
                          <div>
        <div class="header--sidebar" />
        <header class="header">
          <div class="header__top">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>
                    Avenue Ibn Sina, Rabat, Maroc Téléphone : +212 5377-71905
                  </p>
                </div>
                    <SimplePopOver connectUser={value.connectUser} user={value.user} disconnectUser={value.disconnectUser} signUpUser={value.signUpUser}></SimplePopOver>
              </div>
            </div>
          </div>
          <nav class="navigation">
            <div class="container-fluid">
              <div class="navigation__column left">
                <div class="header__logo">
                  <a class="ps-logo" href="index.html">
                    <Link to="/">
                      <img src="images/logo.png" alt="" />
                    </Link>
                  </a>
                </div>
              </div>
              <div class="navigation__column center">
                <ul class="main-menu menu">
                  <li class="menu-item menu-item-has-children dropdown">
                    {/* <Link to="/">Accueil</Link> */}
                    {/* <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="index.html">Accueil #1</a>
                      </li>
                      <li class="menu-item">
                        <a href="#">Accueil #2</a>
                      </li>
                      <li class="menu-item">
                        <a href="#">Accueil #3</a>
                      </li>
                    </ul> */}
                  </li>
                  <li class="menu-item">
                    <a href="#">Visage</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Cheveux</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Huile</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Peau</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Aliment</a>
                  </li>
                  <li class="menu-item menu-item-has-children dropdown">
                    <a href="/forum">Forum</a>               
                  </li>
                  {/* <li class="menu-item menu-item-has-children dropdown">
                    <a href="#">Contact</a>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="contact-us.html">Contact Us #1</a>
                      </li>
                      <li class="menu-item">
                        <a href="contact-us.html">Contact Us #2</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
              <div class="navigation__column right">
                <form class="ps-search--header">
                  <input
                    autocomplete="off"
                    class="form-control"
                    type="text"
                    name="search"
                    placeholder="Chercher Produit..."
                    value={this.state.search}
                    onChange={this.handleOnChange}
                  />
                  <ProductConsumer>
                    {(value) => (
                      <button
                        onClick={(e) =>
                          value.searchProduct(e, this.state.search)
                        }
                      >
                        <i class="ps-icon-search" />
                      </button>
                    )}
                  </ProductConsumer>
                </form>
                <div class="ps-cart">
                  <Link to="/cart">
                    <a class="ps-cart__toggle" href="#">
                      <ProductConsumer>
                        {(value) => (
                          <span style={{ width: "26px", height: "26px" }}>
                            <i style={{ fontSize: "18px" }}>
                              {value.cart.length}
                            </i>
                          </span>
                        )}
                      </ProductConsumer>

                      <i class="ps-icon-shopping-cart" />
                    </a>
                  </Link>

                  {/* <div class="ps-cart__listing">
                    <div class="ps-cart__content">
                      <div class="ps-cart-item">
                        <a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail">
                          <a href="product-detail.html"></a>
                          <img src="images/cart-preview/1.jpg" alt="" />
                        </div>
                        <div class="ps-cart-item__content">
                          <a
                            class="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            Lorem Ipsum’
                          </a>
                          <p>
                            <span>
                              Quantité:<i>12</i>
                            </span>
                            <span>
                              Total:<i>176MAD</i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="ps-cart-item">
                        <a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail">
                          <a href="product-detail.html"></a>
                          <img src="images/cart-preview/2.jpg" alt="" />
                        </div>
                        <div class="ps-cart-item__content">
                          <a
                            class="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            Lorem Ipsum
                          </a>
                          <p>
                            <span>
                              Quantité:<i>12</i>
                            </span>
                            <span>
                              Total:<i>176MAD</i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="ps-cart-item">
                        <a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail">
                          <a href="product-detail.html"></a>
                          <img src="images/cart-preview/3.jpg" alt="" />
                        </div>
                        <div class="ps-cart-item__content">
                          <a
                            class="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            Lorem Ipsum
                          </a>
                          <p>
                            <span>
                              Quantité:<i>12</i>
                            </span>
                            <span>
                              Total:<i>176MAD</i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ps-cart__total">
                      <p>
                        Nombre d'Items:<span>36</span>
                      </p>
                      <p>
                        Item Total:<span>528.00MAD</span>
                      </p>
                    </div>
                    <div class="ps-cart__footer">
                      <a class="ps-btn" href="cart.html">
                        Acheter<i class="ps-icon-arrow-left"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
                <div class="menu-toggle">
                  <span />
                </div>
              </div>
            </div>
          </nav>
        </header></div>)}}
        </ProductConsumer>
      </>
    );
  }
}
