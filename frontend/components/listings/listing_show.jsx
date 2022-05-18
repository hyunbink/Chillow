import React from "react";

class ListingShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }
    
    render(){

        if (!this.props.listing) return null;
        const { street, city, state, zip_code, sqft, beds, baths, price, photoUrls  } = this.props.listing

        return(
            <div className="listing-div">
                <div className="listing-div-left">
                    {photoUrls.map((photoUrl, i) =>(
                        <img key={i} id={`listing-photo-${i}`} className="listing-photos" src={photoUrl}></img>
                        ))}
                </div>
                <div className="listing-div-right">
                    <nav className="listing-nav-header">
                        <img id='listing-logo' src={window.logo}></img>
                        <a id='heart'>♡♥</a>
                    </nav>
                    <div className="listing-physical-div">
                        <div className="listing-price-div">
                        <span className="listing-price">${price.toLocaleString(undefined, { minimumFractionDigits: 0 })}</span>
                        </div>
                        <span className="listing-physical-info">{beds} </span>
                        <span className="listing-info">bd | </span>
                        <span className="listing-physical-info">{baths} </span>
                        <span className="listing-info">ba | </span>
                        <span className="listing-physical-info">{sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} </span>
                        <span className="listing-info">sqft</span>
                    </div>
                    <div className="listing-address-div">
                        <span className="listing-address">{street}, </span>
                        <span className="listing-address">{city}, </span>
                        <span className="listing-address">{state} </span>
                        <span className="listing-address">{zip_code}</span>
                    </div>
                    <div className="listings-mini-map">
                        <img id="mini-map" src={window.demoMiniMap}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingShow;