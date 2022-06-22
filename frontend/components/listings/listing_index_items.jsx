import React from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';


class ListingIndex extends React.Component{
    constructor(props){
        super(props);
        this.saved = [];
        this.savedObj = {};
        this.hover = '';
    }

    componentDidMount(){
        let that = this;
        if (!this.props.fromSearchListings) {
            that.props.fetchAllListings()
        }
        this.saved = [];
        if (this.props.saves) {
            this.props.saves.forEach(element => {
                let eleList = element[1]
                if (that.saved.includes(eleList.listing_id)) return;
                that.saved.push(eleList.listing_id);
                that.savedObj = {[eleList]: element[0] };
            });
        }  
    }

    componentDidUpdate(){
        let that = this;
        if (this.props.saves) {
            this.props.saves.forEach(element => {
                let eleList = element[1]
                if (that.saved.includes(eleList.listing_id)) return;
                that.saved.push(eleList.listing_id);
                that.savedObj = {[eleList]: element[0] };
            });
            if (that.saved.length !== that.props.saves.length) {
                that.saved = [];
                that.props.saves.forEach(element => {
                    let eleList = element[1]
                    if (that.saved.includes(eleList.listing_id)) return;
                    that.saved.push(eleList.listing_id);
                    that.savedObj = {[eleList]: element[0] };
                });
            }
        } 
    }

    render(){
        if (!this.props.listings) return null;
        let listingsArr = Object.values(this.props.listings)
        return(
            <div className="index-div-right">
                <div key='listings' className="index-all-listings">
                    {listingsArr.map((listing,j)=>(
                            <div key={j} id={`index-listing-item-${listing.id}`} 
                            className="index-listing" 
                            onClick={()=>this.props.openModal('show',  listing.id)} >
                                <div className="index-listing-photo-div">
                                    <img className="index-listing-photos" 
                                    src={listing.photoUrls[0]} 
                                    alt="listing main photo">
                                    </img>
                                    {this.props.fromUserListings ? <div></div> : this.saved.includes(listing.id) ? 
                                        <FaHeart id="filled-heart" 
                                        onClick={()=> this.props.deleteSave(this.savedObj[listing.id])
                                            } /> : 
                                        <FaRegHeart id="empty-heart" 
                                        onClick={()=>this.props.createSave({user_id: this.props.currentUserId, listing_id: listing.id})} 
                                    />} 
                                </div>
                                <div className="index-listing-info">
                                    <div className="index-listing-price-div">
                                        <span className="index-listing-price">
                                            ${listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <div className="index-listing-char-info-div">
                                        <span className="index-listing-physical-info">{listing.beds} bds | </span>
                                        <span className="index-listing-physical-info">{listing.baths} ba | </span>
                                        <span className="index-listing-physical-info">{listing.sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} sqft - House for sale</span>
                                    </div>
                                    <div className="listing-index-address-div">
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