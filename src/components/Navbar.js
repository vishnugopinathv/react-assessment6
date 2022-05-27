import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <Link to="/" className='navlinks'>
        <h1 >Home</h1>
      </Link>
      <Link to='/students' className='navlinks'>
        <h1>Students</h1>
      </Link>
      <Link to='/contact' className='navlinks'>
        <h1>Contact</h1>
      </Link>
    </nav>
  )
}

export default Navbar