import React, { useCallback } from "react";
import MarkerManager from "../../util/marker_manager";


class ListingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.mapHeader = ""
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
        this.MarkerManager = new MarkerManager(this.map, "", 'pin');
        // add conditional to have the click listener only when creating new form
        
        
        if (this.props.formType === 'Update Listing' ){
            this.MarkerManager.createMarkerFromForm(this.state.latitude, this.state.longitude);
            this.mapHeader = "See below for your listing's coordinates"
        } else {
            this.mapHeader = 'Place pin on map to get coordinates';
            this.map.addListener("click", (e) => {
            this.setState({ latitude: e.latLng.lat(), longitude: e.latLng.lng() });
            this.MarkerManager.createMarkerFromForm(this.state.latitude, this.state.longitude);
        });
        }

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
        });
        
        if (this.props.formType === 'Update Listing') {
            this.props.action(formData, this.state.id).then(action => {
                this.props.history.push(`/listings`);
                this.props.openModal('show', action.listing.id); 
            });
        } else {
            this.props.action(formData).then(action => {
                this.props.history.push(`/listings`);
                this.props.openModal('show', action.listing.id);
            });
        }        
    }

    renderErrors(){
        return <div>
            {this.props.errors.map((err, i) => 
                <p className="list-errs" key={`list-err-${i}`}>{err}</p>
            )}
        </div>
    }

    previewNewPhotos(){
        return this.state.photoFiles ? 
        this.state.photoFiles.map((photo, i) => <img className='form-photo-preview' key={i} src={URL.createObjectURL(photo[0])} alt='chosen-photo-file'></img>) : 
        null
    }
    previewCurrentPhotos(){
        return this.state.photoUrls ? this.state.photoUrls.map((photo, j) => <img className='form-photo-preview' key={j} src={photo} alt='listings-photos'></img>) : 
        null
    }

    render(){
        const { street, city, zip_code, state, latitude, longitude, sqft, beds, baths, price, photoUrls } = this.state;
        console.log("in the form props", this.props.errors)
        return(
            <div className="form-div-container">
                <form className="form-div-listing" onSubmit={this.handleSubmit}>
                    <div className="form-div-left">
                <div className="form-photos-new-prev">{this.previewCurrentPhotos()}{this.previewNewPhotos()}</div>  
                        <div className="form-photo-div">
                            <label className="form-photo-drop-zone" id="form-photo-label">
                                Click or Drag 'n' drop here to add photos:<input type='file' multiple onChange={this.handleFile} />
                            </label>
                        </div>
                    </div>
                    <div className="form-div-right">
                        <div className="form-input-div">
                            <label className="form-input-label" >
                                Address:
                            </label>
                                <br/>
                            <input className="form-input" id="wide-input" type='text' value={street} onChange={this.update('street')} />
                        </div>
                                
                        <div className="form-input-div">
                            <label className="form-input-label" >
                                City:
                            </label>
                                <br/>
                            <input className="form-input" id="wide-input" type='text' value={city} onChange={this.update('city')} />
                        </div>

                        <div className="form-smaller-inputs">
                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    State:
                                </label>
                                    <br/>
                                <input id='short-input-location' className="form-input" type='text' minLength='2' maxLength='2' placeholder="use state abv like 'CA'" value={state} onChange={this.update('state')} />
                            </div>

                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    Zip Code:
                                </label>
                                    <br/>
                                <input id='short-input-location' placeholder="5-digits" className="form-input" type='number' min='9999' max='100000' value={zip_code} onChange={this.update('zip_code')} />
                            </div>

                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    Price:
                                </label>
                                    <br/>
                                <input id='short-input-location' className="form-input" type='number' placeholder="numbers only: no , $" value={price} onChange={this.update('price')} />
                            </div>
                        </div>


                        <div className="form-smaller-inputs">
                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    Beds:
                                </label>
                                    <br/>
                                <input id='short-input' min='0' className="form-input" type='number' value={beds} onChange={this.update('beds')} />
                            </div>

                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    Baths:
                                </label>
                                    <br/>
                                <input id='short-input' min='1' className="form-input" type='number' value={baths} onChange={this.update('baths')} />
                            </div>

                            <div className="form-input-div">
                                <label className="form-input-label" >
                                    Sqft:
                                </label>
                                    <br/>
                                <input id='short-input-location' placeholder="numbers only: no ," className="form-input" type='number' value={sqft} onChange={this.update('sqft')} />
                            </div>
                        </div>

                        <div className="form-map-div">
                            <h1>{this.mapHeader}{" "}<img src="https://maps.google.com/mapfiles/ms/icons/red-dot.png" 
                                id='pin' />
                                <div className="form-map-container">
                                    <div ref={ map => this.mapNode = map } id='form-map'></div>
                                </div>
                            </h1>

                            <div className="form-coord-inputs">
                                <div className="form-input-div">
                                    <label className="form-input-label" >
                                        Latitude:
                                    </label>
                                        <br/>
                                    <input placeholder="Place pin on map" className="form-input" type='text' value={latitude} onChange={this.update('latitude')} readOnly={true}/>
                                </div>

                                <div className="form-input-div">
                                    <label className="form-input-label" >
                                        Longitude:
                                    </label>
                                        <br/>
                                    <input placeholder="Place pin on map" className="form-input" type='text' value={longitude} onChange={this.update('longitude')} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.props.errors.length > 0 ? <div className="list-err-wrapper">{this.renderErrors()}</div> : <div></div>}
                            <div className="form-input-div">
                                <input className="form-submit" type='submit' value={this.props.formType} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ListingForm;
