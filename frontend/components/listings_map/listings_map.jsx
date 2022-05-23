import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { updateFilter, changeFilter } from "../../actions/filter_actions";
import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng=> ({
    lst: latLng.lat(),
    lng: latLng.lng()
});


// do something to get form type and change default mapOptions ?

class ListingMap extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){

    }
    
    componentDidUpdate() {
        this.mapOptions = {
                    center: { lat: this.props.listings[1].latitude, lng: this.props.listings[1].longitude },   
                    zoom: 10
                };
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);    // this renders map
        this.MarkerManager = new MarkerManager(this.map, this.props.openModal);
        this.MarkerManager.updateMarkers(Object.values(this.props.listings));
    }

    render(){
        return(
            <div ref={ map => this.mapNode = map } id='map-container'>
            </div>
        )
    }
}
export default ListingMap;