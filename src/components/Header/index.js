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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/PostList' >Property</Link></li>
                <li><Link to='/ChartMap'>Map</Link></li>
                <li><Link to='/ChartBar'>Bar</Link></li>
                <li><Link to='/ChartTreeMap'>TreeMap</Link></li>
                <li><Link to='/Average'>Average</Link></li>
                <li><Link to='/BoxPlots'> Box Plots</Link></li>
            </ul>
       </nav>
    )
}

export default Navbar;
