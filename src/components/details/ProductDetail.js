import React, { Component } from "react";
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BeautyStars from 'beauty-stars';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { ProductConsumer, ProductContext } from "../globalData/Context";
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import ListRecommandations from "./ListRecommandations";

export default class ProductDetail extends Component {

  state = {
    notif: false,
    nomCat: "",
    value: 1,
    show : false,
  };



  constructor(props)
      {
    super(props)
    this.state = { idProd: null,comm: '',rating: null, comments : [],value : null}

      }

  initialState = { rating: null, comm: '',lastName: [], firstName:[], url:[]};
  handleModal()
       {      this.setState({show: !this.state.show}) }


    ChangeHandler = (event) =>{
    this.setState({ [event.target.name] : event.target.value });
    this.setState({rating : ''+this.state.value+'' });
    this.setState({idProd :''+ this.context.detailProduct.id+''});
    }

    deleteComment = (commentId) =>
         {        axios.delete("http://localhost:8080/comment/"+ commentId)
                  .then(response => {
                  if(response.data != null){
                  this.setState({
                  comments: this.state.comments.filter(comment => comment.id !== commentId)
                   });  }  });       }


     handleSubmit = event => {
    console.log(this.state);
    console.log(this.state.idProd);

     event.preventDefault()
     axios({
                                 method: 'POST',
                                 url: 'http://localhost:8080/comment/add/'+JSON.parse(localStorage.getItem('user')).id,
                                 data: {
                                          rating: this.state.rating,
                                          comm: this.state.comm,
                                          idProd: this.state.idProd,
                                          }  })
                                 .then( response => {
                                 if(response.data != null){
                                 this.setState(this.initialState);
                                 window.location.reload(true);
                                  }  });

     }



    componentDidMount = () => {
    const storeDetailProduct = JSON.parse(
          localStorage.getItem("detailProduct")
        );
      this.setState({idProd : storeDetailProduct.id});
      axios.get("http://localhost:8080/comments/"+storeDetailProduct.id)
                                    .then(response => response.data)
                                    .then((data) => {
                                    this.setState({comments: data});   });
    };

  checkCategory = () => {
    const { idCat } = this.context.detailProduct;
    if (idCat === 1) {
      this.setState({ nomCat: "Visage" });
    } else if (idCat === 2) {
      this.setState({ nomCat: "Cheveux" });
    } else if (idCat === 3) {
      this.setState({ nomCat: "Huile" });
    } else if (idCat === 4) {
      this.setState({ nomCat: "Peau" });
    } else if (idCat === 5) {
      this.setState({ nomCat: "Aliment" });
    }
  };

  render() {
  console.log(this.context.detailProduct.id);
  console.log(this.state.idProd);
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
                        <h1>
                          {value.detailProduct.nom} ({value.detailProduct.unit})
                        </h1>
                        <h4>{this.state.nomCat}</h4>
                        <p class="ps-product__category">{value.nomCat}</p>
                        <h3 class="ps-product__price">
                          {value.detailProduct.prix}DH{" "}
                          <del>{value.detailProduct.prix + 12}DH</del>
                        </h3>
                        <div class="ps-product_block ps-product_quickview">
                          <h4>DESCRIPTION</h4>
                          <p>{value.detailProduct.description}</p>
                        </div>
                        <div class="ps-product_block ps-product_quickview">
                          <h4>SOURCE</h4>
                          <p>{value.detailProduct.source}</p>
                        </div>
                        <div class="ps-product_block ps-product_quickview">
                          <h4>ÉTAT</h4>
                          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                            {value.detailProduct.etat}
                          </p>
                        </div>
                        <div class="ps-product_block ps-product_size">
                          <h4>
                            CHOISIR LA QUANTITÉ
                            <p>Quantité en STOCK: {value.detailProduct.qte}</p>
                          </h4>
                          <div class="container">
                            <ProductConsumer>
                              {(value) => {
                                return (
                                  <>
                                    <button
                                      class="ps-btn ps-btn--gray"
                                      data-decrease
                                      style={{
                                        padding: "10px 15px",
                                        marginRight: "3px",
                                      }}
                                      onClick={() =>
                                        value.decrement(value.detailProduct.id)
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      class="form-control"
                                      style={{
                                        width: "100px",
                                        display: "inline-block",
                                      }}
                                      data-value
                                      type="text"
                                      value={value.detailProduct.count}
                                      disabled
                                    />
                                    <button
                                      class="ps-btn ps-btn--gray"
                                      style={{
                                        padding: "10px 15px",
                                        marginLeft: "3px",
                                      }}
                                      data-increase
                                      onClick={() =>
                                        value.increment(value.detailProduct.id)
                                      }
                                    >
                                      +
                                    </button>
                                  </>
                                );
                              }}
                            </ProductConsumer>
                          </div>
                        </div>
                        <div class="ps-product__shopping">
                          <ProductConsumer>
                            {(value) => (
                              <button
                                class="ps-btn mb-10"
                                onClick={() => {
                                  value.addToCart(value.detailProduct.id);
                                  this.setState({ notif: true });
                                }}
                              >
                                Ajouter au panier
                                <i class="ps-icon-next" />
                              </button>
                            )}
                          </ProductConsumer>

                          <div class="ps-product__actions">
                            <a class="mr-10" href="whishlist.html">
                              <i class="ps-icon-heart" />
                            </a>
                            <a href="compare.html">
                              <i class="ps-icon-share" />
                            </a>
                          </div>
                          {this.state.notif && (
                            <p style={{ color: "green" }}>Produit ajouté!</p>
                          )}
                        </div>
                      </div>
                      <div class="clearfix" />
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
                                              <h3 style={{color: "green"}}>Les commentaires : <br/><br/><br/></h3>
                                              <div style={{ width: "900px", marginLeft:"30px", border: "green" , border: "3px double green"}}>
                                              { this.state.comments.map(comment => {
                                               return (
                                               		<div  style={{ width: "750px",height: "70px", marginLeft:"50px", marginTop:"7px",background:"#e4e4e4"}}>
                                                           {(() => {
                                                      if(JSON.parse(localStorage.getItem('user'))!=null){
                                                            if (JSON.parse(localStorage.getItem('user')).id==comment.user.id) {
                                                                  return ( <><div style={{marginLeft:"25px"}}>
                                                                               	<img src={comment.user.url}  style={{ width: "50px",height: "50px", float:"left",marginLeft:"-10px",marginTop:"3px",overflow:"hidden","-webkit-border-radius":"50px", "-moz-border-radius":"50px","border-radius":"50px"}}/>
                                                                             </div>
                                                                             <div style={{marginLeft: "50px"}}>
                                                                               	 <p><div style={{width:"650px",float:"left", marginTop:"15px"}}><u> <em><strong> {comment.user.lastName} {comment.user.firstName} </strong>  a laissé un commentaire </em>  </u> :     {comment.comm} </div></p>
                                                                               	  <div>
                                                                                    <Button style={{marginTop:"20px"}}variant="danger" size="sm" onClick={this.deleteComment.bind(this, comment.id)}><FontAwesomeIcon icon={faTrash} style={{width:'10px'}}/></Button>
                                                                                  </div>

                                                                             </div> </> ) }
                                                            else {
                                               		             return ( <><div style={{marginLeft:"25px"}} >
                                                                                <img src={comment.user.url}  style={{ marginTop:"3px",width: "50px",height: "50px", float:"left",marginLeft:"-10px",overflow:"hidden","-webkit-border-radius":"50px", "-moz-border-radius":"50px","border-radius":"50px"}}/>
                                                                            </div>
                                                                            <div style={{marginLeft: "50px"}}>
                                                                                 <p style={{ width:"650px",float:"left", marginTop:"15px"}}><u> <em><strong> {comment.user.lastName} {comment.user.firstName} </strong>  a laissé un commentaire </em>  </u> :     {comment.comm}     </p>
                                                                            </div>
                                                                                                                                                   </> )}}
                                              else {
                                                    return ( <><div style={{marginLeft:"25px"}} >
                                                                   <img src={comment.user.url}  style={{ marginTop:"3px",width: "50px",height: "50px", float:"left",marginLeft:"-10px",overflow:"hidden","-webkit-border-radius":"50px", "-moz-border-radius":"50px","border-radius":"50px"}}/>
                                                                </div>
                                                                <div style={{marginLeft: "50px"}}>
                                                                     <p style={{ width:"650px",float:"left", marginTop:"15px"}}><u> <em><strong> {comment.user.lastName} {comment.user.firstName} </strong>  a laissé un commentaire </em>  </u> :     {comment.comm}     </p>
                                                                </div> </> )} })()}
                                                            </div>
                                               		 );} )}
                                                <br/>
                                                </div>
                                               <div>


                                                <form
                                                  class="ps-product__review"
                                                  onSubmit={this.handleSubmit} >
                                                  <div>
                                                  <br/><br/>
                                                  <h3 style={{color: "green"}}>Ajouter votre commentaire : <br/><br/><br/> </h3>
                                                  </div>
                                                  <div>
                                                          {(() => {
                                                            if (JSON.parse(localStorage.getItem('user')) ==null) {
                                                              return (
                                                                <div> <h4>Connectez-vous pour nous laisser un commentaire .</h4></div>
                                                              )
                                                            }
                                                             else {
                                                              return (

                                                          <div class="row" style={{ width: "900px", marginLeft:"30px", border: "green" , border: "3px double green"}}>
                                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 "><br/>
                                                                    <div>
                                                                        <BeautyStars value={this.state.value} onChange={value => this.setState({ value })} />
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
                                                                     <div class="form-group">
                                                                         <label><br/>Votre Commentaire:</label>
                                                                         <textarea class="form-control" rows="6" name="comm" value={this.state.comm} onChange = {this.ChangeHandler} />
                                                                     </div>
                                                                     <div class="form-group">

                                                                          <button class="ps-btn ps-btn--sm" type="submit"> Soumettre <i class="ps-icon-next" />
                                                                          </button>
                                                                     </div>
                                                                </div>
                                                          </div>
                                                              )
                                                            }
                                                          })()}
                                                        </div>
                                                      </form>
                                              </div>
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
                            />
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
                <ListRecommandations products={value.recommandationProducts} />
              </div>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}

ProductDetail.contextType = ProductContext;