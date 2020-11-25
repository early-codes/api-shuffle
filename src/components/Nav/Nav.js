import './Nav.css'
import { Link } from 'react-router-dom'
import React from 'react'


const Nav = () => {

    return (
        <div className="nav">
            <ul className="navLinks">
                <li><Link to="/weather">weather</Link></li>
                <li><Link to="/gifs">gifs</Link></li>
            </ul>
        </div>
    )
}


export default Nav