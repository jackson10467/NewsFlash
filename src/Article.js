import React, { Component } from "react";
import axios from "axios";
import "./article.css";
import Button from "./stories/button/button"

class Category extends Component{
  constructor(props) {
    super(props)
    this.state = {
      test:[]
    }
  }



  render() {
    console.log(this.props.data)
    if (this.props.data != null) {
      let parkDetails = this.props.data.filter(article => article.title === this.props.match.params.id)[0];
      console.log(parkDetails);
      

      return (
        <div className="articleWrap">
        <img className="artImg"src={parkDetails.urlToImage} />
        <div className="articleText">
        <h2>{parkDetails.description}</h2>
        <p>{parkDetails.content}</p>
          </div>
          <Button className="but" label="Read More" type="search" click={ window.location.href = parkDetails.url}/>
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


export default Category