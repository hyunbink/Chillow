import React from "react";
import ListingsIndexItems from '../listings/listing_index_items';
import ListingMap from "../listings_map/listings_map";

class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.searchErrors
    };

    render(){
        if (!this.props.listings) return null;
        let listingsArr = Object.values(this.props.listings)
        console.log("search listings", listingsArr)
        console.log("props", this.props)
        console.log("search results errors", this.props.searchErrors)
        let that = this;
        if (this.props.searchErrors.length > 0) {
            return <>
                <br/> 
                <div className="no-search" onClick={()=>{
                that.props.clearErrors()
                    .then(that.props.history.push('/')); 
            }}> <img src={window.searchNA} alt="No-searches-found" ></img>
                <p>OOPS! No results found. Click here to try again!</p>
                </div>
                </>
        }
        return(
            <div className="main-index-div">
                <div className="left-half" >
                    <ListingMap
                    listings={listingsArr}
                    openModal={this.props.openModal}
                    saves={this.props.userSaves}
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
            // <div className="alt-main-div">
            //     <div className="dummy-index"></div>
            //         <div className="index-div-right">
            //             <div key='listings' className="index-all-listings">
            //                 {listingsArr.map((listing,j)=>(
            //                         <div key={j} className="index-listing" onClick={()=>this.props.openModal('show',  listing.id)} >
            //                             <div className="index-listing-photo-div">
            //                                 <img className="index-listing-photos" 
            //                                 src={listing.photoUrls[0]} 
            //                                 alt="listing main photo">
            //                                 </img>
            //                             </div>
            //                             <div className="index-listing-info">
            //                                 <div className="listing-price-div">
            //                                     <span className="listing-price">
            //                                         ${listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
            //                                     </span>
            //                                 </div>
            //                                 <div className="index-listing-char-info">
            //                                     <span className="listing-physical-info">{listing.beds} </span>
            //                                     <span className="listing-info">bd | </span>
            //                                     <span className="listing-physical-info">{listing.baths} </span>
            //                                     <span className="listing-info">ba | </span>
            //                                     <span className="listing-physical-info">{listing.sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} </span>
            //                                     <span className="listing-info">sqft</span>
            //                                 </div>
            //                                 <div className="listing-address-div">
            //                                     <span className="listing-address">{listing.street}, </span>
            //                                     <span className="listing-address">{listing.city}, </span>
            //                                     <span className="listing-address">{listing.state} </span>
            //                                     <span className="listing-address">{listing.zip_code}</span>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                 ))}
            //             </div>
            //         </div>
            //     <div className="dummy-index"></div>
            // </div>
        )
    }
};

export default SearchResults;