import React, { Component } from "react";

import { ProductConsumer } from "../globalData/Context";

export default class ListCategories extends Component {
  state = {
    search: ""
  };
  handleOnChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="col-sm-12 col-md-3 col-lg-2">
        <ProductConsumer>
          {value => (
            <div class="input-group">
              <input
                autocomplete="off"
                type="text"
                class="form-control"
                placeholder="Chercher Produit..."
                name="search"
                value={this.state.search}
                onChange={this.handleOnChange}
                style={{ width: "170px" }}
              />
              <div
                class="input-group-append"
                id="button-addon4"
                style={{ display: "inline" }}
              >
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={e => value.searchProduct(e, this.state.search)}
                  style={{ backgroundColor: "#27b574", color: "white" }}
                >
                  <i class="fas fa-search" />
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={value.fetchProducts}
                >
                  <i class="fas fa-sync-alt" />
                </button>
              </div>
            </div>
          )}
        </ProductConsumer>

        <h3>Les catégories</h3>
      </div>
    );
  }
}
