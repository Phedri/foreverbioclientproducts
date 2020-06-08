import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";
import { Breadcrumb, BreadcrumbItem, Label, CustomInput, FormGroup, Form } from 'reactstrap';

export default class ValidateOrder extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
            return (
              <div class="ps-content pt-80 pb-80">
                   <h3 class="ps-section__title" data-mask="Ma COMMANDE">Réglement de commande</h3>

<Breadcrumb style={{
    margin: '36px',
    textAlign: 'left',
    display: "flex",
    flexWrap: "wrap",
}}>
    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
    <BreadcrumbItem><a href="/cart">Panier</a></BreadcrumbItem>
    <BreadcrumbItem style={{
        color: "#2ac37d",
        fontWeight: "bold"


    }} active>Commande</BreadcrumbItem>
</Breadcrumb>

<h2 style={{
    marginLeft: '36px',
    marginBottom: '24px',
}}>
    Détails commande
</h2>
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
                    <h3 style={{
                                                textAlign: "center",
                                            }}><i class="fas fa-money-check-alt"></i> Méthode de paiement</h3>
                                            <hr></hr>
                                            <Form>
                                                <FormGroup>
      
        <div>
          <div className="row" style={{
          }}>< CustomInput type="radio"  className="column" id="exampleCustomRadio" name="customRadio" label="Paiement en ligne"  onChange={()=> {value.cartToCommande.paymentMethod="A la livraison"}} style={{

          }}/> 
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label=" Paiement à la livraison" onChange={()=> {value.cartToCommande.paymentMethod="Paiement en ligne"}} className="column"/>
          
          </div>
         
        </div>
      </FormGroup>
      </Form>
                              <ProductConsumer>{(value) => (<div class="ps-cart__actions">
                      <div className="ps-cart__promotion">
                        <div className="form-group">
                          <div className="ps-form--icon">
                            <i className="fa fa-angle-right"></i>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Promo Code"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <Link to="/">
                            <button className="ps-btn ps-btn--gray">
                              Poursuivre ses achats
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="ps-cart__total">
                        <h3>
                          Prix Total: <span>{value.cartSubTotal}DH</span>
                        </h3>
                        {(value.cartToCommande.paymentMethod==="Paiement en ligne") ? 
                        <Link to="/paymentPage">
                        <button className="ps-btn danger" onClick={()=> {
                            console.log("U clicked");
                            console.log("FUCK OFF" +value.cartToCommande.paymentMethod);
                            value.addCommande(value.cartToCommande())}}>
                         Valider ordre<i class="ps-icon-next"></i>
                        </button></Link> : 
                        <Link to="/paymentPage">
                        <button className="ps-btn danger" onClick={()=> {
                            
                            console.log("U clicked");
                            console.log(value.cartToCommande.paymentMethod);
                            value.addCommande(value.cartToCommande())}}>
                         Valider ordre<i class="ps-icon-next"></i>
                        </button></Link> }

                      </div>
                    </div>)}</ProductConsumer>
                    
                    
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
