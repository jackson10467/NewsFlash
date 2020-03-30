import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

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
    <h1>Hello</h1>
  )
}


}


export default App;
