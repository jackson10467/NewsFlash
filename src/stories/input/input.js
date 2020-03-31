import React from 'react';
import "./input.css"

const Input = (props) => (
  <>  
  <input className={props.type} placeholder={props.label}/>
  </>
)

export default Input; 