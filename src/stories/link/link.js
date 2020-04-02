import React from 'react';
import "./link.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Link = (props) => (
  <>  
  <div className="link">
      <a><h3>{props.text}</h3></a> 
  </div>
  </>
)

export default Link; 