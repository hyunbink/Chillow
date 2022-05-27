import React from "react";
import ListingsIndexItems from './listing_index_items';
import ListingMap from "../listings_map/listings_map";


export default({ listings, fetchAllListings, openModal, deleteSave, createSave, saves, userSaves, deleteListing }) => (
    <div className="main-index-div">
        <div className="left-half" >
                <ListingMap
                listings={listings}
                openModal={openModal}
                />
        </div>

        <div className="right-half">
                <ListingsIndexItems deleteSave={deleteSave} 
                createSave={createSave} 
                openModal={openModal} 
                listings={listings} 
                fetchAllListings={fetchAllListings}
                saves={saves}
                userSaves={userSaves}
                deleteListing={deleteListing}
                />
        </div>

    </div>
);