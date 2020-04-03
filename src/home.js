import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './home.css';
// import axios from "axios"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    if (this.props.data == null) {
      return (
        <h1>Wait for Data to Load</h1>
      )
    }
    else {
      return (
        <>
          <div className="heading">
          <h1>Your news, in a flash!</h1>
          <h2>Top Headlines</h2>
          </div>
          <div>{this.props.data.map((article, idx) => (
            <div className="wrapper">
              <Link  to={"/article/" + article.title}><img className="img" src={article.urlToImage}></img></Link>
              
              <div className="textWrapper">
              <Link to={"/article/" + article.title}><h2 className="text-content">{article.title}</h2></Link>
              <p>{article.description}</p>
              </div>
            </div>
          ))}</div>
        </>
      )
    }
    
  }
}


export default Home