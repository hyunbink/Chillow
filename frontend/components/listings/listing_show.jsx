import React from "react";
// import ListingMap from "../listings_map/listings_map";
import MarkerManager from "../../util/marker_manager";
import { Link } from "react-router-dom";

class ListingShow extends React.Component{
    constructor(props){
        super(props);
        // this.state = props[this.props.listingId];
        this.currentUserId = props.currentUserId
        // this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    }
    
    componentDidMount(){
        // this.props.fetchListing(this.props.listingId) 
        this.mapOptions = {
            center: { lat: this.props.listing.latitude, lng: this.props.listing.longitude },     // coords for sf
            zoom: 17
        };
        // console.log("state", this.state )
        // console.log("props", this.props )
        // need to key into next state with listingId
        // this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        console.log('modal props', this.props)
        let icon = 'house'
        this.map = new google.maps.Map(this.mapNode, this.mapOptions); 
        this.MarkerManager = new MarkerManager(this.map, "", icon);
        this.MarkerManager.updateMarkers([this.props.listing])
    }
    
    render(){

        if (!this.props.listing) return null;
        const { street, city, state, zip_code, sqft, beds, baths, price, photoUrls, owner_id, id  } = this.props.listing;
        // const { session } = this.state;
        console.log("render-props", this.props)
        
        let lastPhotoBlur;
        let blurContainer;
        if (photoUrls.length % 2 === 0) {
            lastPhotoBlur = 'last-photo-blur-even';
            blurContainer = 'blur-container-even'
        } else {
            lastPhotoBlur = 'last-photo-blur-odd';
            blurContainer = 'blur-container-odd'
        }
        
        let edit;
        // if (owner_id === this.currentUserId) {<Link className='nav-left-link' to={`/listings/${id}/edit</div>`}>Edit your listing</Link>};
        return(
            <div className="listing-div">
                <div className="listing-div-left">
                    {photoUrls.map((photoUrl, i) =>(
                        <img key={i} id={`listing-photo-${i}`} className="listing-photos" src={photoUrl} alt="listing-photo"></img>
                        ))}
                        <div className={blurContainer}>
                            <img key={photoUrls.length} className={lastPhotoBlur} src={photoUrls[0]} alt="listing-photo"></img>
                            <div className="blur-img-text" onClick={console.log('favorite')}>Click to Favorite</div>
                            {/* <button className="tour-button">Request a tour</button>   */}
                            {/* maybe have button show email and say 'email owner to request tour ??' */}
                        </div>
                        
                        
                </div>
                <div className="listing-div-right">
                    <nav className="listing-nav-header">
                        <img id='listing-logo' src={window.logo} alt="Chillow-logo"></img>
                        <a id='heart'>♡ Save ♥ Saved </a>
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
                        <div ref={ map => this.mapNode = map } id='map-container'>
                        </div>
                    </div>
                        {owner_id === this.currentUserId ? 
                        <div className="show-edit-link-container">
                            <Link className='show-edit-link' onClick={this.props.closeModal} to={`/listings/${id}/edit`}>Edit your listing</Link>
                        </div> : 
                        null}
                </div>
            </div>
        )
    }
}

export default ListingShow;