import React from 'react';
import { Link } from "react-router-dom";


const Splash = props => {

    return (
        <div>
            <div className='homeBanner'>
                <div className="call-to-action">
                    <h1 id='action-header'>Find it. Tour it. Own it</h1>
                    <input type="search" className='search-bar' placeholder='Enter an address, city, or ZIP code'/>
                </div>
                    <img src={window.homeBanner} alt="home-banner"></img>
                    <br/>
            </div>
                <div>
                    <div><Link className='nav-left-link' to='/listings'>Buy a home</Link></div>
                    <div><Link className='nav-left-link' to='/listings/new'>Sell a home</Link></div>
                    {/* <div>Rent a home</div> */}
                </div>
        </div>
    )
}

export default Splash;