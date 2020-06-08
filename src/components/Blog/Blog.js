import React, { Component } from "react";
import axios from "axios";
import MyArticle from "./MyArticle";
import "./css/version/garden.css"

class Blog extends Component {
    state = {
        articles: []
      };
    
      fetchArticles = () => {
        axios.get("http://localhost:9092/Article").then(res => {
          const articles = res.data;
          this.setState({ articles });
        });
      };
      componentDidMount = () => {
        this.fetchArticles();
      };
      render() {
        return (
                <div>
                <div class="page-title wb">
                <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <h2><i class="fa fa-leaf bg-green"></i> Blog</h2>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item"><a href="#">Home</a></li>
                          <li class="breadcrumb-item active">Blog</li>
                      </ol>
                  </div>                    
              </div>
          </div>
          </div>
                <div id="secwrapper">
                  <section>
                            {this.state.articles.map(article => (
                                <MyArticle
                                  key={article.id}
                                  MyArticle={article}
                                  fetchArticles={this.fetchArticles} />
                            ))}
                  </section>
                </div>
                </div>
        );
}
}
export default Blog;
