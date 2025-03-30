import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <Link class="navbar-brand" to="/home"><b>Zesty <span>Verse</span></b></Link>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <br />
      {/* <Link class="navbar-brand" to="/home"><b>Zesty <span>Verse</span></b></Link> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/register">Registration</Link>
        </li>

        {/* <li class="nav-item">
         <Link class="nav-link active"  to="/submit" className="submit-link">Submit a Recipe</Link>
        </li> */}

        {/* <li class="nav-item">
         <Link class="nav-link active" to="/profile">Profile</Link>
        </li> */}
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
