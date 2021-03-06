import React from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import ListingsIndexItems from '../listings/listing_index_items';
import ListingMap from "../listings_map/listings_map";


class SavesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = props.listings
    };

    

    render(){
        let listingsArr = Object.values(this.props.listings);
        listingsArr = listingsArr.filter(ele => ele)
        let savesArr;
        savesArr = Object.values(this.props.saves).map(list => list[1].listing_id)
        let that = this;
        return(
            (listingsArr.length === 0) ? <div className="no-search-wrapper">
            <br/> 
            <div className="no-search" onClick={()=>{
            (that.props.history.push('/listings')); 
        }}> <img src={window.searchNA} alt="No-searches-found" ></img>
            <p>No Saved Listings. Click here to view all Listings!</p>
            </div>
            </div> :
            <div className="main-index-div">
                <div className="left-half" >
                    <ListingMap
                    listings={listingsArr}
                    openModal={this.props.openModal}
                    saves={savesArr}
                    />
                </div>

                <div className="right-half">
                    <ListingsIndexItems deleteSave={this.props.deleteSave} 
                    createSave={this.props.createSave} 
                    openModal={this.props.openModal} 
                    listings={listingsArr} 
                    fetchAllListings={this.props.fetchAllListings}
                    saves={this.props.saves}
                    userSaves={this.props.userSaves}
                    deleteListing={this.props.deleteListing}
                    />
                </div>
            </div>
        )
    }
};

export default SavesIndex