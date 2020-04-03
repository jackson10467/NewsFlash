import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './search.css';
import './home.css'
import axios from "axios"
import Input from "./stories/input/input"
import Button from "./stories/button/button"
// import axios from "axios"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      search: ''
    }
  }
  
  handleUsername = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  search = async () => {
    const URL= `https://newsapi.org/v2/top-headlines?q=${this.state.search}&apiKey=7be0f0e2220345a29fd31ddaaea0d8b2`
    const response = await axios(URL);
    let filtered = response.data.articles.filter(article=>
      !article.title.includes('%')
    )
    this.setState({
      data: filtered
    })
    this.props.update(filtered)

  }

  render() {
    if (this.state.data == null) {
      return (
        <>
        <h1 className="head">Search for stories</h1>
        <div className="Search-con">
        <Input type="primary" change={this.handleUsername} label="Search" />
        <Button className="but" label="Search" click={this.search} type="search"></Button>
        </div>
      </>
      )
    }
    else {
      return (
        <>
        <h1 className="head">Search for stories</h1>
        <div className="Search-con">
        <Input type="primary" change={this.handleUsername} label="Search" />
        <Button className="but" label="Search" click={this.search} type="search"></Button>
        </div>
       
          <div className="heading">
            <h2>Top Headlines for: {this.state.search} </h2>
          </div>
          <div>{this.state.data.map((article, idx) => (
            <div className="wrapper">
              <Link  to={"/article/" + article.publishedAt}><img alt="article" className="img" src={article.urlToImage}></img></Link>
              <div className="textWrapper">
              <Link to={"/article/" + article.publishedAt}><h2 className="text-content">{article.title}</h2></Link>
              <p>{article.description}</p>
              </div>
            </div>
          ))}</div>
        </>
      )
    }

    return (
      <>
        <h1 className="head">Search for stories</h1>
        <Input type="search" change={this.handleUsername} label="Search" />
        <Button className="but" label="Search" click={this.search} type="search"></Button>
      </>
    )

    
  }
}


export default Search