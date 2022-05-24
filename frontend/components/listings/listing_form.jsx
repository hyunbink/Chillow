import React, { useCallback } from "react";
import MarkerManager from "../../util/marker_manager";


class ListingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    
    componentDidMount(){
        
        let mapOptions;
        this.props.formType === 'Update Listing' ? 
        mapOptions = {
            center: { lat: this.props.listing.latitude, lng: this.props.listing.longitude },    
            zoom: 15
        } : mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },    
            zoom: 13
        };


        this.map = new google.maps.Map(this.mapNode, mapOptions);
        if (this.props.formType === 'Update Listing' ){this.MarkerManager = new MarkerManager(this.map, "", 'pin');
        this.MarkerManager.updateMarkers([this.props.listing])     }   

        this.setState( { photoFiles: [] } )
    }

    handleFile(e){
        this.setState({ photoFiles: [...this.state.photoFiles, e.currentTarget.files]})
    }

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', this.state.id);
        formData.append('listing[street]', this.state.street);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[zip_code]', this.state.zip_code);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[longitude]', this.state.longitude);
        formData.append('listing[latitude]', this.state.latitude);
        formData.append('listing[sqft]', this.state.sqft);
        formData.append('listing[beds]', this.state.beds);
        formData.append('listing[baths]', this.state.baths);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[owner_id]', this.state.owner_id); 

        this.state.photoFiles.forEach(element => {
            formData.append('listing[photos][]', element[0]);
            console.log('element', element[0])
        });
        
        if (this.props.formType === 'Update Listing') {
            this.props.action(formData, this.state.id).then(action => {
                // this.props.history.push(`/listings`);
                this.props.openModal('show', action.listing.id); 
            });
        } else {
            this.props.action(formData).then(action => {
                // this.props.history.push(`/listings`);
                this.props.openModal('show', action.listing.id);
            });
        }
        
    }

    preview(){
        console.log('preview-state', this.state);
            // need to retool rendering of photoFiles vs photoUrls, can't have both at same time ?
        return this.state.photoFiles ? this.state.photoFiles.map((photo, i) => <img className='form-photo-preview' key={i} src={photo} alt='chosen-photo-file'></img>) :
        this.state.photoUrls ? this.state.photoUrls.map((photo, j) => <img className='form-photo-preview' key={j} src={photo} alt='listings-photos'></img>) : 
        null
    }

    render(){
        const { street, city, zip_code, state, latitude, longitude, sqft, beds, baths, price, photoUrls } = this.state;
        return(
            <div className="form-div-container">
                <form className="form-div" onSubmit={this.handleSubmit}>
                    <div className="form-div-left">
                <div className="form-photos-new-prev"></div>  
                        <div className="form-photo-div">
                            <label id="form-photo-label">
                                Click here or Drag 'n' drop to add photo:<input type='file' multiple onChange={this.handleFile} />
                            </label>
                        </div>
                    </div>
                    <div className="form-div-right">
                        <label>
                            Address:<input type='text' value={street} onChange={this.update('street')} />
                        </label>
                            <br/>
                        <label>
                            City:<input type='text' value={city} onChange={this.update('city')} />
                        </label>
                            <br/>
                        <label>
                            State:<input type='text' placeholder="use state abv like 'CA'" value={state} onChange={this.update('state')} />
                        </label>
                        <label>
                            Zip Code:<input type='number' min='9999' max='100000' value={zip_code} onChange={this.update('zip_code')} />
                        </label>
                            <br/>
                        <label>
                            Price:<input type='number' placeholder="$" value={price} onChange={this.update('price')} />
                        </label>
                            <br/>
                        <label>
                            Beds:<input type='number' value={beds} onChange={this.update('beds')} />
                        </label>
                        <label>
                            Baths:<input type='number' value={baths} onChange={this.update('baths')} />
                        </label>
                        <label>
                            Sqft:<input type='number' value={sqft} onChange={this.update('sqft')} />
                        </label>
                            <br/>
                        <div className="geocode-container">
                            <h1>Place pin on map to get coordinates{" "}<img src="https://maps.google.com/mapfiles/ms/icons/red-dot.png" 
                            id='pin' />
                <div className="form-map-container">
                <div ref={ map => this.mapNode = map } id='map-container'>
                        </div>
                </div>
                            </h1>
                            <label>
                                Latitude:<input type='text' value={latitude} onChange={this.update('latitude')} />
                            </label>
                                <br/>
                            <label>
                                Longitude:<input type='text' value={longitude} onChange={this.update('longitude')} />
                            </label>
                        </div>
                            <br/>
                        <input className="form-submit" type='submit' value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default ListingForm;
