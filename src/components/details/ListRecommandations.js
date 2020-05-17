import React, { Component } from "react";

import { ProductConsumer } from "../globalData/Context";
import Product from "../products/Product";

export default class ListRecommandations extends Component {
  render() {
    return (
      <>
        <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100" />
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="related ">
              - Recommandations
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
                {this.props.products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
