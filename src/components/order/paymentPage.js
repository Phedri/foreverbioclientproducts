import React, { Component } from "react";
import { useState, useRef, useEffect } from 'react';
import { render } from "@testing-library/react";
import {ProductConsumer} from "../globalData/Context";
import "../../css/payment.css";

  function Product({price}) {
      const [paidFor, setPaidFor] = useState(false);
      const [error, setError] = useState(null);
      const paypalRef = useRef();
    
      useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description:"Produits bio",
                    amount: {
                      currency_code: 'USD',
                      value: price ,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log(order);
    
            },
            onError: err => {
              setError(err);
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, ["Produits bio", price]);
    
      if (paidFor) {
        return (
          <div>
            <h1> Nous avons bien reçu votre paiement !!</h1>
          </div>
        );
      }
    
      return (
        <div>
          {error && <div>Il y'a eu une erreur {error.message}</div>}
          <h2 style={{
                                    left:'80px',
                                    marginLeft: '36px',
                                    marginBottom: '24px'}}>
            PAIEMENT EN LIGNE 
          </h2>
          <h2 style={{
                                   
                                    marginLeft: '36px',
                                    marginBottom: '24px'}}>
            Le montant à payer est de {price} Dh 
          </h2>
          <h3 style={{
                                   
                                   marginLeft: '36px',
                                   marginBottom: '24px'}}>Choisissez la méthode de paiement en ligne que vous souhaitez : </h3>
          <div ref={paypalRef} />
        </div>
      );
    }
    
    function paymentPage() {
      return (
        <div class="payment">
        <ProductConsumer>
          {(value) => (
        <div>
          <Product price={value.cartSubTotal} />
        </div> )}
        </ProductConsumer>
        </div>
      );}
    export default paymentPage;