import React from 'react';
import { Link } from "react-router-dom";


const Splash = props => {

    return (
            <div className='homeBanner'>
                <div className="call-to-action">
                    <h1 id='action-header'>Find it. Tour it. Own it</h1>
                    <input type="search" className='search-bar' placeholder='Enter an address, city, or ZIP code'/>
                </div>
                    <img src={window.homeBanner}></img>
            </div>
    )
}

export default Splash;