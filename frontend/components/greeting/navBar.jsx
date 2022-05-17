import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='top-nav'>
            <div className='nav-left'>
                <a href='#'>Buy</a>
                <a href='#'>Rent</a>
                <a href='#'>Sell</a>
            </div>
            <Link to='/' className='nav-mid'>
                <img src={window.logo}></img>
            </Link>
            <div className='nav-right'>
            <Link id='login' to="/login" >Login</Link>
            <Link id='signup' to="/signup">Sign up</Link>
            </div>
        </nav>
    );

    const personalNavBar = () => (
        <hgroup className='header-group'>
            <h2 className='header-name'>Hi, {currentUser.email}!</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalNavBar() : sessionLinks();

};

export default NavBar;