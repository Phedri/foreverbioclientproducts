import React, {Component} from "react";
import Product from "./Product";
import { ProductConsumer } from "../globalData/Context";
import ListCategories from "../categories/ListCategories";

import BestSellers from "./BestSellers";
export default class ListFavoris extends Component {

    state = {
        search: "",
    };

    render() {

        return (
            <>

                <div className="ps-container">
                    <div className="ps-section__header mb-50">
                        <h3 className="ps-section__title" data-mask="produits bio">
                            Découvrez vos Favoris
                        </h3>
                    </div>

                    <div className="ps-section__content pb-50">
                        <div
                            className="masonry-wrapper"
                            data-col-md="4"
                            data-col-sm="2"
                            data-col-xs="1"
                            data-gap="30"
                            data-radio="100%"
                        >
                            <div className="grid-sizer"/>
                            <div className="row">
                                <ListCategories/>
                                <div className="col-md-9 col-lg-9">
                                    <ProductConsumer>
                                        {(value) => {
                                            //console.log(value.favorisProduct);
                                            console.log(value.products.find((product) => product.id === 2));

                                            return value.favorisProduct.map((favProd) => {
                                                if (value.products.find((product) => product.id === favProd.idProd) != null){
                                                    return <Product product={value.products.find((product) => product.id === favProd.idProd)}/>
                                                }
                                                return null;
                                            });
                                        }}
                                    </ProductConsumer>
                                    <hr/>
                                </div>
                                <BestSellers/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                );

}

}