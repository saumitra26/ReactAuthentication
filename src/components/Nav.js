import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link to="/"class="navbar-brand" href="#">Home</Link>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link to="/login"class="nav-link active" aria-current="page" href="#">Login</Link>
              </li>
              <li class="nav-item">
                <Link  to="/register"class="nav-link" href="#">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav
