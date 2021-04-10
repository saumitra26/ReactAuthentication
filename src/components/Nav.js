import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({name, setName=(name)=>{name=''}}) => {
  const logout=async()=>{
    await fetch('http://localhost:5000/api/auth/logout',{
      method:'POST',
      credentials:'include',
      headers: ({
          'Content-Type': 'application/json'}),
  });
  setName(name='')
  }
  let menu;
  if(name===""){
    menu=(
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link to="/login"class="nav-link active" aria-current="page" href="#">Login</Link>
              </li>
              <li class="nav-item">
                <Link  to="/register"class="nav-link" href="#">Register</Link>
              </li>
        </ul>
      )
  } else{
    menu=(
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <Link to="/login"class="nav-link active" onClick={logout} aria-current="page" href="#">LogOut</Link>
      </li>
      
</ul>
    )
  }
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link to="/"class="navbar-brand" href="#">Home</Link>
          <div>
              {menu}
          </div>
        </div>
      </nav>
    )
}

export default Nav
