import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>WCBC ZOO</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/animals'><li>Animals</li></Link>
                <Link to='/employees'><li>Employees</li></Link>
                <Link to='/exhibits'><li>Exhibits</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/animal-employee-services'><li>Employees Services</li></Link>
            </ul>
        </div>
    )
}

export default Navbar