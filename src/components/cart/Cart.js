import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";

export default class Cart extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
            return (
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
                        {value.cart.map((product) => (
                          <tr>
                            <td>
                              <a
                                class="ps-product__preview"
                                href="product-detail.html"
                              >
                                <img
                                  class="mr-15"
                                  src={product.url}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                                {product.nom}
                              </a>
                            </td>
                            <td>{product.prix}DH</td>
                            <td>
                              <div class="form-group--number">
                                <button
                                  class="minus"
                                  onClick={() => value.decrement(product.id)}
                                >
                                  <span>-</span>
                                </button>
                                <input
                                  class="form-control"
                                  type="text"
                                  value={product.count}
                                />
                                <button
                                  class="plus"
                                  onClick={() => value.increment(product.id)}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                            </td>
                            <td>{product.total}DH</td>
                            <ProductConsumer>
                              {(value) => (
                                <td>
                                  <div
                                    class="ps-remove"
                                    onClick={() => value.removeItem(product.id)}
                                  ></div>
                                </td>
                              )}
                            </ProductConsumer>
                          </tr>
                        ))}
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
                          Prix Total: <span>{value.cartSubTotal}DH</span>
                        </h3>
                        <a class="ps-btn" href="/checkout">
                          Commander<i class="ps-icon-next"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
