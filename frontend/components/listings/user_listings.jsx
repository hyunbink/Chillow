import React from "react";

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
        console.log('allListings', listingsArr)
        let listingsArr = [];
        allListings.forEach(element => {
            console.log('element', element.owner_id);
            element.owner_id === this.props.currentUserId ? listingsArr.push(element) : null
        });
        return(
            <div className="alt-main-div">
                <div className="dummy-index"></div>
                    <div className="index-div-right">
                        <div key='listings' className="index-all-listings">
                            {listingsArr.map((listing,j)=>(
                                    <div key={j} className="index-listing" onClick={()=>this.props.openModal('show',  listing.id)} >
                                        <div className="index-listing-photo-div">
                                            <img className="index-listing-photos" 
                                            src={listing.photoUrls[0]} 
                                            alt="listing main photo">
                                            </img>
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
                <div className="dummy-index"></div>
            </div>
        )
    }
};

export default UserListings;