import React from 'react';
import "./nav.css"
import { Link } from 'react-router-dom';

// This is a functional component - just sent up a little differently as an arrow function!
const Nav = (props) => (
  <>  
    <nav className="nav">
    <Link to="/" className="l">
    <h1>NewsFlash</h1>
    </Link>
    </nav>
    <nav className="nav2">
      <Link to={props.to1} className="title">
        <h1>{props.link1}</h1>
    </Link>
    <Link to={props.to2} className="title">
        <h1>{props.link2}</h1>
    </Link>
    <Link to={props.to3} className="title">
        <h1>{props.link3}</h1>
    </Link> 
    <Link to={props.to4} className="title">
        <h1>{props.link4}</h1>
    </Link> 
    </nav>
  </>
)

export default Nav; 