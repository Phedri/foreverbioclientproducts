import React, { Component } from "react";

import { ProductConsumer } from "../globalData/Context";

export default class ProductDetail extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
            return (
              <div class="ps-product--detail pt-60">
                <div class="ps-container">
                  <div class="row">
                    <div class="col-lg-10 col-md-12 col-lg-offset-1">
                      <div class="ps-product__thumbnail">
                        <div class="ps-product__preview">
                          <div class="ps-product__variants">
                            <div class="item">
                              <img src={value.detailProduct.url} alt="" />
                            </div>
                          </div>
                        </div>
                        <div class="ps-product__image">
                          <div class="item">
                            <img
                              class="zoom"
                              src={value.detailProduct.url}
                              alt=""
                              data-zoom-image={value.detailProduct.url}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="ps-product__thumbnail--mobile">
                        <div class="ps-product__main-img">
                          <img src="images/shoe-detail/1.jpg" alt="" />
                        </div>
                        <div
                          class="ps-product__preview owl-slider"
                          data-owl-auto="true"
                          data-owl-loop="true"
                          data-owl-speed="5000"
                          data-owl-gap="20"
                          data-owl-nav="true"
                          data-owl-dots="false"
                          data-owl-item="3"
                          data-owl-item-xs="3"
                          data-owl-item-sm="3"
                          data-owl-item-md="3"
                          data-owl-item-lg="3"
                          data-owl-duration="1000"
                          data-owl-mousedrag="on"
                        >
                          <img src="images/shoe-detail/1.jpg" alt="" />
                          <img src="images/shoe-detail/2.jpg" alt="" />
                          <img src="images/shoe-detail/3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="ps-product__info">
                        <div class="ps-product__rating">
                          <select class="ps-rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select>
                          <a href="#comm">(Voir les commentaires)</a>
                        </div>
                        <h1>{value.detailProduct.nom}</h1>
                        <p class="ps-product__category">{value.nomCat}</p>
                        <h3 class="ps-product__price">
                          {value.detailProduct.prix}DH{" "}
                          <del>{value.detailProduct.prix + 12}DH</del>
                        </h3>
                        <div class="ps-product__block ps-product__quickview">
                          <h4>DESCRIPTION</h4>
                          <p>{value.detailProduct.description}</p>
                        </div>
                        <div class="ps-product__block ps-product__quickview">
                          <h4>SOURCE</h4>
                          <p>{value.detailProduct.source}</p>
                        </div>
                        <div class="ps-product__block ps-product__size">
                          <h4>
                            CHOISIR LA QUANTITÉ
                            <p>Quantité en STOCK: {value.detailProduct.qte}</p>
                          </h4>
                          <div class="container">
                            <button
                              class="ps-btn ps-btn--gray"
                              data-decrease
                              style={{
                                padding: "10px 15px",
                                marginRight: "3px",
                              }}
                            >
                              -
                            </button>
                            <input
                              class="form-control"
                              style={{ width: "50px", display: "inline-block" }}
                              data-value
                              type="text"
                              value="1"
                              disabled
                            />
                            <button
                              class="ps-btn ps-btn--gray"
                              style={{
                                padding: "10px 15px",
                                marginLeft: "3px",
                              }}
                              data-increase
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div class="ps-product__shopping">
                          <a class="ps-btn mb-10" href="cart.html">
                            Ajouter au panier<i class="ps-icon-next"></i>
                          </a>
                          <div class="ps-product__actions">
                            <a class="mr-10" href="whishlist.html">
                              <i class="ps-icon-heart"></i>
                            </a>
                            <a href="compare.html">
                              <i class="ps-icon-share"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="ps-product__content mt-50">
                        <ul class="tab-list" role="tablist">
                          <li class="active">
                            <a
                              href="#tab_01"
                              aria-controls="tab_01"
                              role="tab"
                              data-toggle="tab"
                            >
                              Description
                            </a>
                          </li>
                          <li>
                            <a
                              href="#tab_02"
                              aria-controls="tab_02"
                              role="tab"
                              data-toggle="tab"
                            >
                              Commentaire(s)
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="tab-content mb-60">
                        <div
                          class="tab-pane active"
                          role="tabpanel"
                          id="tab_01"
                        >
                          <p>{value.detailProduct.description}</p>
                          <p>{value.detailProduct.source}</p>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_02">
                          <p class="mb-20">
                            1 commentaire pour <strong>PRODUIT</strong>
                          </p>
                          <div class="ps-review">
                            <div class="ps-review__thumbnail">
                              <img src="images/user/1.jpg" alt="" />
                            </div>
                            <div class="ps-review__content" id="comm">
                              <header>
                                <select class="ps-rating">
                                  <option value="1">1</option>
                                  <option value="1">2</option>
                                  <option value="1">3</option>
                                  <option value="1">4</option>
                                  <option value="5">5</option>
                                </select>
                                <p>
                                  By<a href=""> Alena Studio</a> - November 25,
                                  2017
                                </p>
                              </header>
                              <p>
                                Soufflé danish gummi bears tart. Pie wafer
                                icing. Gummies jelly beans powder. Chocolate bar
                                pudding macaroon candy canes chocolate apple pie
                                chocolate cake. Sweet caramels sesame snaps
                                halvah bear claw wafer. Sweet roll soufflé
                                muffin topping muffin brownie. Tart bear claw
                                cake tiramisu chocolate bar gummies dragée lemon
                                drops brownie.
                              </p>
                            </div>
                          </div>
                          <form
                            class="ps-product__review"
                            action="_action"
                            method="post"
                          >
                            <h4>AJOUTER VOTRE COMMENTAIRE</h4>
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div class="form-group">
                                  <label>
                                    Nom et Prénom:<span>*</span>
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder=""
                                  />
                                </div>
                                <div class="form-group">
                                  <label>
                                    Email:<span>*</span>
                                  </label>
                                  <input
                                    class="form-control"
                                    type="email"
                                    placeholder=""
                                  />
                                </div>
                                <div class="form-group">
                                  <label>
                                    Votre évaluation<span></span>
                                  </label>
                                  <select class="ps-rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
                                <div class="form-group">
                                  <label>Votre Commentaire:</label>
                                  <textarea
                                    class="form-control"
                                    rows="6"
                                  ></textarea>
                                </div>
                                <div class="form-group">
                                  <button class="ps-btn ps-btn--sm">
                                    Soumettre<i class="ps-icon-next"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_03">
                          <p>
                            Add your tag <span> *</span>
                          </p>
                          <form
                            class="ps-product__tags"
                            action="_action"
                            method="post"
                          >
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="text"
                                placeholder=""
                              />
                              <button class="ps-btn ps-btn--sm">
                                Add Tags
                              </button>
                            </div>
                          </form>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_04">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="6"
                              placeholder="Enter your addition here..."
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <button class="ps-btn" type="button">
                              Submit
                            </button>
                          </div>
                        </div>
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
