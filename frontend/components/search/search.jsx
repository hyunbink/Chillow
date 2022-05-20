import React from "react";
import ListingsIndex from './listing_index';
import ListingMap from "../listings_map/listings_map";


export default({ listings, fetchAllListings, openModal }) => (
    <div className="main-index-div">
        <div className="left-half" >
                <ListingMap
                listings={listings}
                openModal={openModal}
                />
        </div>

        <div className="right-half">
                <ListingsIndex openModal={openModal} listings={listings} fetchAllListings={fetchAllListings}/>
        </div>

    </div>
);