import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart } from 'react-icons/fa';


class ListingIndex extends React.Component{
    constructor(props){
        super(props);
        this.saved = [];
        this.savedObj = {};
    }
    
    componentDidMount(){
        this.props.fetchAllListings()
        let that = this;
        this.saved = [];
        if (this.props.saves) {
            this.props.saves.forEach(element => {
                // that.props.fetchListing(element[1].listing_id);
                let eleList = element[1]
                if (that.saved.includes(eleList.listing_id)) return;
                // console.log(`${element[0]} elementId`, eleList.listing_id)
                // console.log(`${element[0]} element`, eleList)
                that.saved.push(eleList.listing_id);
                // console.log('savedArr', that.saved);
                that.savedObj = {[eleList]: element[0] };
                // console.log('savedObj', that.savedObj)
            });
        }  
    }

    componentDidUpdate(){
        let that = this;
        // this.saved = [];
        
        if (this.props.saves) {
            this.props.saves.forEach(element => {
                // that.props.fetchListing(element[1].listing_id);
                let eleList = element[1]
                if (that.saved.includes(eleList.listing_id)) return;
                // console.log(`${element[0]} elementId`, eleList.listing_id)
                // console.log(`${element[0]} element`, eleList)
                that.saved.push(eleList.listing_id);
                // console.log('savedArr', that.saved);
                that.savedObj = {[eleList]: element[0] };
                // console.log('savedObj', that.savedObj);


            });
        }  
        // console.log('EEEEEE', this.saved)
        // if (this.saved) {
        //     this.saved.forEach(element => {
        //         console.log('saved-ele', element);

        //     });
        // }
    }

//  can't like via index, need to change z-index? not rendering empty heart after dislike, cause Im not taking out saveIds in arr
    render(){
        if (!this.props.listings) return null;
        let listingsArr = Object.values(this.props.listings)
        // console.log('listingsArr', listingsArr[0])
        return(
            <div className="index-div-right">
                <div key='listings' className="index-all-listings">
                    {listingsArr.map((listing,j)=>(
                            <div key={j} className="index-listing" onClick={()=>this.props.openModal('show',  listing.id)} >
                                <div className="index-listing-photo-div">
                                    <img className="index-listing-photos" 
                                    src={listing.photoUrls[0]} 
                                    alt="listing main photo">
                                    </img>
                                    {this.saved.includes(listing.id) ? <FaHeart id="filled-heart" onClick={()=>this.props.deleteSave(this.savedObj[listing.id]) } /> : <FaRegHeart id="empty-heart" onClick={()=>this.props.createSave({user_id: this.props.currentUserId, listing_id: listing.id})} />}
                                </div>
                                <div className="index-listing-info">
                                    <div className="listing-price-div">
                                        <span className="listing-price">
                                            ${listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <div className="index-listing-char-info">
                                        <span className="listing-physical-info">{listing.beds} </span>
                                        <span className="listing-info">bd | </span>
                                        <span className="listing-physical-info">{listing.baths} </span>
                                        <span className="listing-info">ba | </span>
                                        <span className="listing-physical-info">{listing.sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} </span>
                                        <span className="listing-info">sqft</span>
                                    </div>
                                    <div className="listing-address-div">
                                        <span className="listing-address">{listing.street}, </span>
                                        <span className="listing-address">{listing.city}, </span>
                                        <span className="listing-address">{listing.state} </span>
                                        <span className="listing-address">{listing.zip_code}</span>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default ListingIndex