import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

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
            <a className='nav-left-link' href='https://github.com/hyunbink/Chillow' >Github</a>
            <a className='nav-left-link' href='https://www.linkedin.com/in/matia-kim/' >LinkedIn</a>
            <span id='logged-in-user'>
                {/* <FaUserCircle id='href-logo'/> */}
                    <div className='nav-left-link'>{currentUser.email}</div>
                <div className="drop-down-box">
                    <div className='drop-down-saves-link'><Link to={`/listings/saves`}>Saved Listings</Link></div>
                    <div className='drop-down-saves-link'><Link to="/listings/user/listings">Your Listings</Link></div>
                    <div className='drop-down-saves-link'><Link  onClick={logout} to="/">Logout</Link></div>
                </div>
                </span>
            </div>
        </nav>
    );

    return currentUser ? personalNavBar() : sessionLinks();

};

export default NavBar;

{/* <BsGithub className='href-logo'/>
<BsLinkedin className='href-logo'/> */}