import React, { Component } from "react";

export default class BestSellers extends Component {
  render() {
    return (
      <>
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="features">
              - Découvrez nos meilleurs produits
            </h3>

            <ul class="ps-masonry__filter">
              <li class="current">
                <a href="#" data-filter="*">
                  Tout <sup>8</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".nike">
                  Nourriture<sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".adidas">
                  Boisson <sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".men">
                  Textile
                </a>{" "}
                <sup>1</sup>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".women">
                Agriculture <sup>1</sup>
              </a>
            </li>
          </ul>
        </div>
        <div class="ps-section__content pb-50">
          <div
            class="masonry-wrapper"
            data-col-md="4"
            data-col-sm="2"
            data-col-xs="1"
            data-gap="30"
            data-radio="100%"
          >
            <div class="ps-masonry">
              <div class="grid-sizer"></div>
              <div class="grid-item kids">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <div class="ps-badge">
                        <span>Nouveau</span>
                      </div>
                      <div class="ps-badge ps-badge--sale ps-badge--2nd">
                        <span>-35%</span>
                      </div>
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/1.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price">
                          <del>220MAD</del> 120MAD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item nike">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/2.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item adidas">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/3.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item kids">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <div class="ps-badge ps-badge--sale">
                        <span>-35%</span>
                      </div>
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/4.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price">
                          <del>220MAD</del> 120MAD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item men">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/5.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item women">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/6.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item kids">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/7.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item kids">
                <div class="grid-item__content-wrapper">
                  <div class="ps-shoe mb-30">
                    <div class="ps-shoe__thumbnail">
                      <a class="ps-shoe__favorite" href="#">
                        <i class="ps-icon-heart"></i>
                      </a>
                      <img src="images/bio-product/8.jpg" alt="" />
                      <a
                        class="ps-shoe__overlay"
                        href="product-detail.html"
                      ></a>
                    </div>
                    <div class="ps-shoe__content">
                      <div class="ps-shoe__variants">
                        <div class="ps-shoe__variant normal">
                          <img src="images/bio-product/2.jpg" alt="" />
                          <img src="images/bio-product/3.jpg" alt="" />
                          <img src="images/bio-product/4.jpg" alt="" />
                          <img src="images/bio-product/5.jpg" alt="" />
                        </div>
                        <select class="ps-rating ps-shoe__rating">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="2">5</option>
                        </select>
                      </div>
                      <div class="ps-shoe__detail">
                        <a class="ps-shoe__name" href="#">
                          Lorem Ipsum
                        </a>
                        <p class="ps-shoe__categories">
                          <a href="#">Nourriture</a>,<a href="#"> Boisson</a>,
                          <a href="#">Textile</a>
                        </p>
                        <span class="ps-shoe__price"> 120MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
