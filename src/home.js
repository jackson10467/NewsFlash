import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import './home.css';
// import axios from "axios"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    console.log(this.props.data)
    if (this.props.data == null) {
      return (
        <h1>Wait for Data to Load</h1>
      )
    }
    else {
      return (
        <>
          <div>{this.props.data.map((article,idx) => (
            <>
              <Link className="text-content" to={"/profile/" + article.title}>{article.title}</Link>
              <Link className="img" to={"/profile/" + article.title}><img src={article.urlToImage}></img></Link>
              <p>{article.description}</p>
            </>
          ))}</div>
        </>
      )
    }
    
  }
}


export default Home