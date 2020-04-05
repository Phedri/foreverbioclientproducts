import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <>
        <div class="ps-content pt-80 pb-80">
          <div class="ps-container">
            <div class="ps-cart-listing">
              <table class="table ps-cart__table">
                <thead>
                  <tr>
                    <th>Tous les produits</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a class="ps-product__preview" href="product-detail.html">
                        <img
                          class="mr-15"
                          src="images/product/cart-preview/1.jpg"
                          alt=""
                        />
                        NOM air jordan One mid
                      </a>
                    </td>
                    <td>PRIX $150</td>
                    <td>
                      <div class="form-group--number">
                        <button class="minus">
                          <span>-</span>
                        </button>
                        <input class="form-control" type="text" value="2" />
                        <button class="plus">
                          <span>+</span>
                        </button>
                      </div>
                    </td>
                    <td>TOTAL PAR PRODUIT $300</td>
                    <td>
                      <div class="ps-remove"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="ps-cart__actions">
                <div class="ps-cart__promotion">
                  <div class="form-group">
                    <div class="ps-form--icon">
                      <i class="fa fa-angle-right"></i>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Promo Code"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <Link to="/">
                      <button class="ps-btn ps-btn--gray">
                        Poursuivre ses achats
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="ps-cart__total">
                  <h3>
                    Prix Total: <span> 2599.00 $</span>
                  </h3>
                  <a class="ps-btn" href="checkout.html">
                    Cammander<i class="ps-icon-next"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
