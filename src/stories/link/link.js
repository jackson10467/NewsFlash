import React from 'react';
import "./link.css"


const Link = (props) => (
  <>  
  <div className="link">
      <a href="https://newsapi.org/">{props.text}</a> 
  </div>
  </>
)

export default Link; 