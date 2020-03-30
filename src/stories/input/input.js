import React from 'react';
import "./input.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Input = (props) => (
  <>  
  <input className={props.type} placeholder={props.label}/>
  </>
)

export default Input; 