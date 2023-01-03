
import React from 'react'
import { Link} from "react-router-dom";
import '../styles/navbar.css'

const navbar = () => {
  return (
  <div className="navbar">
    <div className='leftside'>
         <h1>YOGA CLASSES</h1>
    </div>
    <div className='rightside'>
<Link to='/home'>Home</Link>
<Link to='/batch'>Batches </Link>
<Link to='/contact'>Contact Us</Link>
<Link to='/signup'>Sign Up</Link>
    </div>
    </div>

  )
}

export default navbar
