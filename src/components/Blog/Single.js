import React, { Component } from "react";
import "./css/version/garden.css"
import"./css/colors.css"
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
class Single extends Component{
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
        <article>
					<a href="#"><img src={imageurl} alt=""/></a>
					<h1>{titre}</h1>
					<p>{text}</p>
          <a href="#" class="readmore">{categorie}</a>
        </article>

    )  ;            
}
}
export default Single;