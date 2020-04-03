import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Nav from "./stories/nav/nav"
import Home from "./home"
import Article from "./Article"
import Category from "./tech.js"
import Search from "./search"
import Footer from "./stories/footer/footer"
import {Route} from "react-router-dom"

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
    let filtered = response.data.articles.filter(article=>
      !article.title.includes('%')
    )
    this.setState({
      data: filtered
    })
  };  

  handler = (childData) => {
    this.setState({
      data: childData
  })
}

  render() {
    return (
      <>
      <div className="footer-fixer">
      <Nav link1="Tech" to1="/Tech" link2="Business" to2="/Business" link3="Health" to3="/Health" link4="Search" to4="/Search"></Nav>
      <Route exact path="/" render={RouterProps => 
        <Home data={this.state.data} {...RouterProps}/> 
        } />
      <Route path="/article/:id" render={RouterProps => 
        <Article data={this.state.data} {...RouterProps}/> 
        } />
      <Route path="/Tech" render={RouterProps => 
        <Category update={this.handler} category="technology"{...RouterProps}/> 
        } />
      <Route path="/Business" render={RouterProps => 
        <Category update={this.handler} category="business"{...RouterProps}/> 
        } />
      <Route path="/Health" render={RouterProps => 
        <Category update={this.handler} category="health"{...RouterProps}/> 
        } />
      <Route path="/Search" render={RouterProps => 
        <Search update={this.handler} {...RouterProps}/> 
          } />

      </div>
        <div className="footwrap">
        <Footer />
      </div>

        </>
    
      
      

  )
}


}


export default App;
