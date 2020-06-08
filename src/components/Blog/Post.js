import React, { Component} from "react";
import axios from "axios";
import MyArticle from "./MyArticle";
import Single from "./Single";


import "./css/version/garden.css"
class Post extends Component{
    constructor(props) {
        super(props);
    
        this.state = { article: { dateCreation: '' } };
    
      }
    componentDidMount() {
        const { match: { params } } = this.props;
      
        axios.get(`http://localhost:9092/Article/${params.id}`)
          .then(({ data: article }) => {
            console.log('article', article);
            console.log('done');
      
            this.setState({ article });
          });
        }
   render(){
       const {article} = this.state;
        return(
        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                <span class="color-green">{article.categorie}</span>

                                <h1>{article.titre}</h1>

                                <div class="blog-meta big-meta">
                                    <small><a href="garden-single.html" title=""> Edité le : {article.dateCreation}</a></small>
                                    <small><a href="blog-author.html" title="">Par {article.editeur}</a></small>
                                </div>
                            </div>
                                <div class="postImageContainer">
                                <img src={article.imageurl} alt="" class="img-fluid"/>
                                </div>

                                <div class="blog-content">  
                                <div class="pp">
                                    <p>{article.text} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
       
        );
    }






     /*constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            editeur:'',
            datecreation:'',
            categorie:'',
            titre:'',
            text:'',
            imageurl:''
        }
    }

    fetchArticle = () => {
        axios.get(`http://localhost:8080/Article/${id}`).then(res => {
          const article = res.data;
          this.setState({ article });
        });
      };
      componentDidMount = () => {
        
        this.fetchArticle();
      };
    render() { 
        return(
        <section>
            {this.state.article.map(article => (
                 <Single
                    key={article.id}
                    Single={article}
                    fetchArticle={this.fetchArticle} />
                            ))}
                  </section>
        );
               
    }}*/
 
}
export default Post


