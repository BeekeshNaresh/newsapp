import React, { Component } from 'react'
import {
  
  Link
} from "react-router-dom";
export default class Navbar extends Component { 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <ul className="navbar d-flex justify-content-center">
        <li className=" mx-3">
          <Link className="nav-link "   to="/home">Home</Link>
        </li>
        <li className=" mx-3">
          <Link className="nav-link "  to="/business" >Business</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
    
        <li className="nav-item mx-3">
          <Link className="nav-link " to="/health">Health</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link " to="/science">Sciences</Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
       
      </ul>

  
  </div>
</nav>
      </div>
    )
  }
}
