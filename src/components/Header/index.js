import React from 'react';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
       <nav>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/' className='active'>Home</Link></li>
                <li><Link to='/PostList' className='active'>Property</Link></li>
            </ul>
       </nav>
    )
}

export default Navbar;
