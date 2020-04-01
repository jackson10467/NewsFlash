import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Nav from "./stories/nav/nav"
import Home from "./home"
import Category from "./Article"
import Footer from "./stories/footer/footer"
import {Route, Link} from "react-router-dom"

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount = async () => {
    const URL= "https://newsapi.org/v2/top-headlines?country=us&apiKey=7be0f0e2220345a29fd31ddaaea0d8b2"
    const response = await axios(URL);
    console.log(response.data.articles[0].description);
    this.setState({
      data: response.data.articles
    })
    console.log(this.state.data);
  };

  
  render() {
    return (
      <div>
      <Nav link1="Tech" link2="Business" link3="Health" link4="Search" link5="More"></Nav>
      <Route exact path="/" render={RouterProps => 
        <Home data={this.state.data} {...RouterProps}/> 
        } />
      <Route exact path="/article/:id" render={RouterProps => 
        <Category data={this.state.data} {...RouterProps}/> 
        } />
      <Footer/>
      </div>
      

  )
}


}


export default App;
