import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style={{display:"flex"}}>
   <Link to="/">
   <span className="navbar-brand">Product Store</span>
   </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav " >
       <Link to="/create">
       <span class="nav-link active" aria-current="page" >Create</span>
       </Link>
       
      </div>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar