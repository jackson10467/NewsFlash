import React from 'react';
import "./button.css"

const Button = (props) => (
  <button onClick={props.click} className={props.type}>
        {props.label}
    </button>
)

export default Button; 