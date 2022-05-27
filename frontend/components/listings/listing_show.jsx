import React from "react";
import MarkerManager from "../../util/marker_manager";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';



class ListingShow extends React.Component{
    constructor(props){
        super(props);
        this.currentUserId = this.props.currentUserId
    }
    
    componentDidMount(){
        this.mapOptions = {
            center: { lat: this.props.listing.latitude, lng: this.props.listing.longitude }, 
            zoom: 17
        };

        let icon = 'house'
        this.map = new google.maps.Map(this.mapNode, this.mapOptions); 
        this.MarkerManager = new MarkerManager(this.map, "", icon);
        this.MarkerManager.createMarkerFromShow(this.props.listing)
    }

    deleteListing(listingId){
        return e => {
            this.props.closeModal();
            this.props.deleteListing(listingId);
        }
    }
    
    render(){

        if (!this.props.listing) return null;
        const { street, city, state, zip_code, sqft, beds, baths, price, photoUrls, owner_id, id  } = this.props.listing;
        
        let lastPhotoBlur;
        let blurContainer;
        if (photoUrls.length % 2 === 0) {
            lastPhotoBlur = 'last-photo-blur-even';
            blurContainer = 'blur-container-even'
        } else {
            lastPhotoBlur = 'last-photo-blur-odd';
            blurContainer = 'blur-container-odd'
        }
        let saver;
        let saveId;
        if (this.props.saves) {
            this.props.saves.forEach(element => {
                if (element[1].user_id === this.props.currentUserId && element[1].listing_id === this.props.listingId) {
                    saver = 'saved';
                    saveId = element[0]
                }
            });
        }
        
        

        return(
            <div className="listing-div">
                <div className="listing-div-left">
                    {photoUrls.map((photoUrl, i) =>(
                        <img key={i} id={`listing-photo-${i}`} className="listing-photos" src={photoUrl} alt="listing-photo"></img>
                        ))}
                        <div className={blurContainer}>
                            <img key={photoUrls.length} className={lastPhotoBlur} src={photoUrls[0]} alt="listing-photo"></img>
                            <div className="blur-img-text" 
                            onClick={saver==='saved' ? ()=>this.props.deleteSave(saveId) : ()=>this.props.createSave({user_id: this.props.currentUserId, listing_id: this.props.listing.id})}
                            >{saver==='saved' ? 'Click to Un-Save' : 'Click to Save' }</div>
                        </div>
                        
                        
                </div>
                <div className="listing-div-right">
                    <nav className="listing-nav-header">
                        <img id='listing-logo' src={window.logo} alt="Chillow-logo"></img>
                        <a onClick={saver==='saved' ? ()=>this.props.deleteSave(saveId) : ()=>this.props.createSave({user_id: this.props.currentUserId, listing_id: this.props.listing.id})} 
                        id='heart'> {saver==='saved' ? <FaHeart id="show-filled-heart"  />
                        : <FaRegHeart id="show-empty-heart" />
                    } </a>
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
                        <div ref={ map => this.mapNode = map } id='show-map'>
                        </div>
                    </div>
                        {owner_id === this.currentUserId ? 
                        <div className="show-edit-link-container">
                            <Link className='show-edit-link' onClick={this.props.closeModal} to={`/listings/${id}/edit`}>Edit your listing</Link>
                            <Link className='show-edit-link' onClick={this.deleteListing(id)} to={'/listings'} >Remove your listing</Link>
                        </div> : 
                        null}
                </div>
            </div>
        )
    }
}

export default ListingShow;