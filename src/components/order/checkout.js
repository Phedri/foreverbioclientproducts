import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";


import { Breadcrumb, BreadcrumbItem, Label, CustomInput, FormGroup, Form } from 'reactstrap';

import '../../css/checkout.css';
export default class CheckoutPage extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <div class="ps-content pt-80 pb-80" style={{}}>
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
                                    Détails acheteur
                    </h2>
                                <div class="ps-container">
                                    <div class="row" style={{
                                        margin: '24px'
                                    }}>
                                        <div class="column" style={{
                                            paddingRight: '24px'
                                        }}>
                                            <h3><i class="fas fa-user"></i> Informations personnelles</h3>
                                            <hr></hr>
                                            <div class="ps-home-contact__form" style={{
                                                textAlign: "left",
                                            }}>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Nom <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Nom' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Prénom <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Prénom' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Email <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Email' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Téléphone <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Téléphone' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                            <hr></hr>
                                            </div>


                                        </div>

                                        <div class="column" style={{
                                            paddingLeft: '24px'
                                        }}>
                                            <h3><i class="fas fa-map-marker-alt"></i> Adresse</h3>
                                            <hr></hr>
                                            <div class="ps-home-contact__form" style={{
                                                textAlign: "left",
                                            }}>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Entreprise <span style={{
                                                            color: "red",
                                                        }}><b></b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Entreprise' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",

                                                    }}>
                                                        Adresse 1 <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Adresse' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Adresse <span style={{
                                                            color: "red",
                                                        }}><b></b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Adresse' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Ville <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Ville' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Code postal <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Code postal' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="ps-cart-listing" style={{
                                        margin: "auto auto"

                                    }}>

                                        <div class="ps-cart__actions" style={{
                                            margin: "auto auto"

                                        }}>

                                            <div class="ps-cart__total" style={{
                                                margin: "auto auto"

                                            }}>

                                                <a class="ps-btn" href="/validateOrder">
                                                    Suivant<i class="ps-icon-next"></i>
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
