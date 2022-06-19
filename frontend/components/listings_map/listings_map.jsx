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
        console.log('listings map props', this.props.listings)
        console.log('object attempt map props', Object.values(this.props.listings))
        let allListingsArr = Object.values(this.props.listings)
        console.log('first listing', allListingsArr[0])
        console.log('all listings from map', allListingsArr)
        console.log("map lat and long", allListingsArr[0].latitude, allListingsArr[0].longitude)
        let that = this;
        if (allListingsArr[0].longitude) {
                that.mapOptions = {
                            center: { lat: allListingsArr[0].latitude, lng: allListingsArr[0].longitude },   
                            zoom: 10
                        };
        } else {
            that.mapOptions = {
                center: { lat: 37.6, lng: -121.5 },   
                zoom: 8
            };
        }
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