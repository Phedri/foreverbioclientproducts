import React, { Component } from "react";

import Product from "./Product";
import Advertising from "../layout/Advertising";

import { ProductConsumer } from "../globalData/Context";

export default class ListProducts extends Component {
  render() {
    return (
      <>
        <Advertising />

        <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100"></div>
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="produits bio">
              - Découvrez nos produits bio
            </h3>

            {/* <ul
              class="ps-masonry__filter"
              styles={{ display: "flex", color: "red" }}
            >
              <li class="current">
                <a href="#" data-filter="*">
                  Tout <sup>8</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".visage">
                  Visage <sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".cheveux">
                  Cheveux <sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".huile">
                  Huile <sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".peau">
                  Peau <sup>1</sup>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".aliment">
                  Aliment <sup>1</sup>
                </a>
              </li>
            </ul> */}
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
              <div class="">
                <div class="grid-sizer"></div>
                <div className="row">
                  <ProductConsumer>
                    {(value) => {
                      return value.products.map((product) => (
                        <Product key={product.id} product={product} />
                      ));
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
