import React, { Component } from 'react'
import {
  
  Link
} from "react-router-dom";
export default class Navbar extends Component { 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top  ">
  <div className="container-fluid d-flex">
  <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
   <div className='collapse navbar-collapse' id="navbarNav">
   <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <Link className="nav-link "   to="/home">Home</Link>
        </li>
        <li className=" nav-item mx-3">
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
    

  
  </div>
</nav>
      </div>
    )
  }
}

