import React from 'react';
import "./footer.css";
import Link from "../link/link"

// This is a functional component - just sent up a little differently as an arrow function!
const Footer = () => (
  <>  
  <div className="footer">
    <Link text="Powered by NewsAPI"></Link>
  </div>
  </>
)

export default Footer; 