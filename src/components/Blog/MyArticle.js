import React, { Component } from "react";
import "./css/version/garden.css"
import"./css/colors.css"
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
class MyArticle extends Component{
render() {
    const {
      id,
      editeur,
      dateCreation,
      categorie,
      titre,
      text,     
      imageurl,
    } = this.props.MyArticle;
    return (
        <article1>
					<a href="#"><img src={imageurl} alt=""/></a>
					<h2>{titre}</h2>
					<p>{text}</p>
          <Link to={`/post/${id}`}>
              <h5>Lire plus...</h5>
          </Link>
          <a href="#" class="readmore">{categorie}</a>
        </article1>

    )  ;            
}
}
export default MyArticle;
