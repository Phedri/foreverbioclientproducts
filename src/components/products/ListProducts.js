import React, { Component } from "react";

import Product from "./Product";
import Advertising from "../layout/Advertising";

import { ProductConsumer } from "../globalData/Context";
import ListCategories from "../categories/ListCategories";

import { Pagination } from "../layout/Pagination";

export default class ListProducts extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <>
        <Advertising />

        <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100" />
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="produits bio">
              - Découvrez nos produits bio
            </h3>
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
              <div class="grid-sizer" />
              <div className="row">
                <ListCategories />
                <div className="col-md-9 col-lg-9">
                  <ProductConsumer>
                    {(value) => {
                      return value.currentProducts.map((product) => (
                        <Product key={product.id} product={product} />
                      ));
                    }}
                  </ProductConsumer>

                  <ProductConsumer>
                    {(value) => (
                      <Pagination
                        productsPerPage={value.productsPerPage}
                        totalProducts={value.products.length}
                        paginate={value.paginate}
                      />
                    )}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100" />
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="hot deal">
              - Découvrez nos meilleures ventes
            </h3>
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
              <div class="grid-sizer" />
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
        </div> */}
      </>
    );
  }
}
