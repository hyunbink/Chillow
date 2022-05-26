import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='top-nav'>
            <div className='nav-left'>
                <Link className='nav-left-link' to='/listings'>Buy</Link>
                {/* <Link className='nav-left-link' href='#'>Rent</Link> */}
                <Link to='/listings/new' className='nav-left-link'>Sell</Link>
                
            </div>
            <Link to='/' className='nav-mid'>
                <img src={window.logo} alt="chillow-logo"></img>
            </Link>
            <div className='nav-right'>
            <Link id='login' to="/login" >Login</Link>
            <Link id='signup' to="/signup">Sign up</Link>
            </div>
        </nav>
    );

    const personalNavBar = () => (
        <nav className='top-nav'>
            <div className='nav-left'>
                <Link className='nav-left-link' to='/listings'>Buy</Link>
                {/* <Link className='nav-left-link' href='#'>Rent</Link> */}
                <Link to='/listings/new' className='nav-left-link'>Sell</Link>
            </div>
            <Link to='/' className='nav-mid'>
                <img src={window.logo} alt="chillow-logo"></img>
            </Link>
            <div className='nav-right'>
            <Link id='logout' onClick={logout} to="/">Logout</Link>
            <span id='logged-in-user'>
                <img id='user-symbol' src={window.userSymbol} alt='user-symbol'/>
                {currentUser.email}
                <div className="drop-down-box">
                    <div className='drop-down-saves-link'><Link to={`/listings/saves`}>Saved Listings</Link></div>
                    <div className='drop-down-saves-link'><Link id='#' onClick={logout} to="/">Your Listings</Link></div>
                    <div className='drop-down-saves-link'><Link id='logout' onClick={logout} to="/">Logout</Link></div>
                </div>
                </span>
            </div>
        </nav>
    );

    return currentUser ? personalNavBar() : sessionLinks();

};

export default NavBar;