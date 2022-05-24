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
                    <div><Link className='nav-left-link' to='/listings'>
                        <img src={window.buyHome} className='splash-img' alt='buy-home-png'></img>
                        <h1 className='splash-h1'>Buy a home</h1>
                        <p className='splash-p'>Find your place with an immersive photo experience.</p>
                        <div><button className='splash-button'>Search Homes</button></div>
                    </Link></div>
                    <div><Link className='nav-left-link' to='/listings/new'>
                        <img src={window.sellHome} className='splash-img' alt='sell-home-png'></img>
                        <h1 className='splash-h1'>Sell a home</h1>
                        <p className='splash-p'>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                        <div><button className='splash-button'>See your options</button></div>
                    </Link></div>
                    {/* <div>Rent a home</div> */}
                </div>
        </div>
    )
}

export default Splash;