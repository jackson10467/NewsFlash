import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Nav from "./stories/nav/nav"
import Home from "./home"
import {Route, Link} from "react-router-dom"

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount = async () => {
    const npsURL= "https://newsapi.org/v2/top-headlines?country=us&apiKey=7be0f0e2220345a29fd31ddaaea0d8b2"
    const response = await axios(npsURL);
    console.log(response.data.articles[0].description);
    this.setState({
      data: response.data.articles
    })
    console.log(this.state.data);
  };

  
  render() {
    return (
      <div>
      <Nav link1="categories" link2="search" link3="test"></Nav>
      <Route exact path="/" render={RouterProps => 
        <Home data={this.state.data} {...RouterProps}/> 
        } />
      </div>
      

  )
}


}


export default App;
