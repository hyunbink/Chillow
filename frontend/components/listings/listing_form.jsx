import React, { useCallback } from "react";


class ListingForm extends React.Component {
    constructor(props){
        // this.state = props.listing
        super(props);
        console.log('props', props);
        this.state = props.listing;
        console.log('this.state', this.state);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },     // coords for sf
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    }

    handleFile(e){
        return e=> {
            this.setState({ photoUrls: e.currentTarget.value})  // is is photoFile or photo or photosUrl?
        }
    }

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value})
            console.log('updated', this.state)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('this.props.action', this.props.action(this.state))
        this.props.action(this.state)
        console.log('submitted',this.state)
    }

    render(){
        const { street, city, zip_code, state, latitude, longitude, sqft, beds, baths, price, photoUrls } = this.state;
        return(
                <form className="form-div" onSubmit={this.handleSubmit}>
                {/* <p className="form-title">{this.props.formType}:</p> */}
                    <div className="form-div-left">
                        <div className="form-photo-div">
                            <label id="form-photo-label">
                                Click here or Drag 'n' drop to add photo:<input type='file' onChange={this.handleFile} />
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
                            State:<input type='text' value={state} onChange={this.update('state')} />
                        </label>
                        <label>
                            Zip Code:<input type='number' min='9999' max='100000' value={zip_code} onChange={this.update('zip_code')} />
                        </label>
                            <br/>
                        <label>
                            Price:<input type='text' value={price} onChange={this.update('price')} />
                        </label>
                            <br/>
                        <label>
                            Beds:<input type='text' value={beds} onChange={this.update('beds')} />
                        </label>
                        <label>
                            Baths:<input type='text' value={baths} onChange={this.update('baths')} />
                        </label>
                        <label>
                            Sqft:<input type='text' value={sqft} onChange={this.update('sqft')} />
                        </label>
                            <br/>
                        <div className="geocode-container">
                            <h1>Place pin on map to get coordinates{" "}<img src="https://maps.google.com/mapfiles/ms/icons/red-dot.png" 
                            id='pin' />
                            </h1>
                            <div ref={ map => this.mapNode = map } id='map-container'>
                            </div>
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
        )
    }
}

export default ListingForm;