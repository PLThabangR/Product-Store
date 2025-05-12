import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style={{display:"flex"}}>
   <Link to="/home">
   <a class="navbar-brand">Product Store</a>
   </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " >
       <Link to="/create">
       <a class="nav-link active" aria-current="page" >Create</a>
       </Link>
       
      </div>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar