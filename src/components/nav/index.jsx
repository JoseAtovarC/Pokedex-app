import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg  bg-danger justify-content-between">
      <Link to="/" style={{textDecoration:"none"}}>
      <h2 className='text-warning font-weight-bold'>Pokedex</h2></Link>
   
  </nav>
  )
}

export default Nav