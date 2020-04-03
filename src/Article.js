import React, { Component } from "react";
import "./article.css";
import Button from "./stories/button/button"

class Article extends Component{
  constructor(props) {
    super(props)
    this.state = {
      test:[]
    }
  }


  render() {
    console.log(this.props.data)
    if (this.props.data != null) {
      let article = this.props.data.filter(article => article.publishedAt === this.props.match.params.id)[0];
      console.log(article);
      let redirect = () => {
        window.location.assign(article.url);
      }

      return (
        
        <div className="articleWrap">
          {this.props.data && article &&
            <>
            <img alt="article"className="artImg" src={article.urlToImage} />
            <div className="articleText">
              <h2>{article.description}</h2>
              <p>{article.content}</p>
            </div></>
            }
          <Button className="but" label="Read More" type="search" click={redirect}/>
        </div>

      )
    }
               return (
                <>
                 <div>
                  <h1>{this.props.match.params.id}</h1>
                   </div>
                   </>
          
              )   
  }


  }


export default Article