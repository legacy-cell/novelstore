import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Novel Hub</Link>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div 
      className="collapse navbar-collapse" 
      id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className='nav-link ' to="/Addproducts">Addproducts</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/signup">Signup</Link>
        </li>
        <li className="nav-item active">
          <Link className='nav-link' to="/signin">Signin</Link>
        </li>
        <li className="nav-item active">
          <Link className='nav-link' to="/about">About us</Link>
        </li>
       
      </ul>
    </div>
  </nav>
  )
}

export default Navbar