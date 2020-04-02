import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import './home.css';
import axios from "axios"
import Article from "./Article"
// import axios from "axios"

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:null
    }
  }
  
  componentDidMount = async () => {
    const URL= `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7be0f0e2220345a29fd31ddaaea0d8b2`
    const response = await axios(URL);
    let filtered = response.data.articles.filter(article=>
      !article.title.includes('%'),
    )
    console.log(response.data.articles[0].description);
    this.setState({
      data: filtered
    })
    this.props.update(filtered)
    console.log(this.state.data);
  };


  render() {
    console.log(this.state.data)
    if (this.state.data == null) {
      return (
        <h1>Wait for Data to Load</h1>
      )
    }
    else {
      return (
        <>
          <div>
          <div className="heading">
            <h2>Top {this.props.category} Headlines</h2>
          </div>
          <div>{this.state.data.map((article, idx) => (
            <div className="wrapper">
              <Link  to={"/article/" + article.publishedAt}><img className="img" src={article.urlToImage}></img></Link>
              <div className="textWrapper">
              <Link to={"/article/" + article.publishedAt}><h2 className="text-content">{article.title}</h2></Link>
                <p>{article.description}</p>
              </div>
            </div>
          ))}</div>
         </div>

        </>
      )
    }
    
  }
}


export default Category