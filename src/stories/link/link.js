import React from 'react';
import "./link.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Link = (props) => (
  <>  
  <div className="link">
      <a href="https://newsapi.org/">{props.text}</a> 
  </div>
  </>
)

export default Link; 