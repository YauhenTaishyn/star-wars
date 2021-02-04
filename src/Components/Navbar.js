import React from "react";
import {NavLink} from "react-router-dom";



const Navbar = () => {

    return (
        <nav className='navbar  navbar-dark bg-primary  navbar-expand-lg'>
            <div className='navbar-brand'>
                homework
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink exact to='/' className='nav-link'> Main </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Login' className='nav-link'> Login </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Registration' className='nav-link'> Registration </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/RecoveryPage' className='nav-link'> PasswordRecovery  </NavLink>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar;