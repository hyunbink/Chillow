import React from "react";
import ListingsIndexItems from '../listings/listing_index_items';
import ListingMap from "../listings_map/listings_map";

class SearchResults extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        if (!this.props.listings) return null;
        let listingsArr = Object.values(this.props.listings)
        let that = this;
        let savesArr;
        savesArr = Object.values(this.props.saves).map(list => list[1].listing_id)
        if (this.props.searchErrors.length > 0) {
            return <div className="no-search-wrapper">
                <br/> 
                <div className="no-search" onClick={()=>{
                that.props.clearErrors()
                    .then(that.props.history.push('/')); 
            }}> <img src={window.searchNA} alt="No-searches-found" ></img>
                <p>OOPS! No results found. Click here to try again!</p>
                </div>
                </div>
        }
        return(
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
                    fromSearchListings={true}
                    errors={this.props.searchErrors}
                    />
                </div>
            </div>
        )
    }
};

export default SearchResults;