import React from "react";
import ListingsIndexItems from './listing_index_items';
import ListingMap from "../listings_map/listings_map";

class UserListings extends React.Component{
    constructor(props){
        super(props);
        this.state = props.listings
    };

    componentDidMount(){
        this.props.fetchAllListings();
    }
    
    render(){
        if (!this.props.listings) return null;
        let allListings = Object.values(this.props.listings)
        let listingsArr = [];
        allListings.forEach(element => {
            element.owner_id === this.props.currentUserId ? listingsArr.push(element) : null
        });
        let that = this;
        return(
            (listingsArr.length === 0) ? <div className="no-search-wrapper">
            <br/> 
            <div className="no-search" onClick={()=>{
            (that.props.history.push('/listings/new')); 
        }}> <img src={window.searchNA} alt="No-searches-found" ></img>
            <p>You have no Listings. Click here to make a new Listing!</p>
            </div>
            </div> : 
                <div className="main-index-div">
                <div className="left-half" >
                <ListingMap
                listings={listingsArr}
                openModal={that.props.openModal}
                />
                </div>
                
                <div className="right-half">
                <ListingsIndexItems deleteSave={that.props.deleteSave} 
                createSave={that.props.createSave} 
                openModal={that.props.openModal} 
                listings={listingsArr} 
                fetchAllListings={that.props.fetchAllListings}
                saves={that.props.saves}
                userSaves={that.props.userSaves}
                deleteListing={that.props.deleteListing}
                fromUserListings={true}
                />
                </div>
                </div>
            
        )
    }
};

export default UserListings;