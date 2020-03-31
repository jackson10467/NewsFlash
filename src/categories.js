import React, { Component } from "react";
import axios from "axios";

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
      console.log(parkDetails)
    }

               return (
                <>
                 <div>
                  <h1>This Park is: {this.props.match.params.id}</h1>
                     {/* <img src={parkDetails.images[0].url} />
                     <h2>{parkDetails.description}</h2>
                     <br></br>
                     <h3>Weather</h3>
                     <p>{parkDetails.weatherInfo}</p> */}
                   </div>
                   </>
          
              )   
  }


  }


export default Category