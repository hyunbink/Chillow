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

const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },     // coords for sf
            zoom: 13
        };
class ListingMap extends React.Component{
    constructor(props){
        super(props);

    }

    // getLatLng(address) {
    //     const geocoder = new google.maps.Geocoder();
    //     geocoder.geocode( { 'address': address }, function(results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             mapOptions.center.lat = results[0].geometry.location.lat();
    //             mapOptions.center.lng = results[0].geometry.location.lng();
    //             mapOptions.zoom= 13;

    //             this.createMap();
    //             this.getAddressFromLatLng(mapOptions.center.lat, mapOptions.center.lng);
    //         } else {
    //             window.alert('Geocoder failed due to: ' + status);
    //         }
    //     }).bind(this);
    // }

    // createMap(){
    //     this.map = new google.maps.Map(this.mapNode, mapOptions);
    //     this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    //     this.registerListeners();
    //     this.MarkerManager.updateMarkers(this.props.listings);
    // }

    // getAddressFromLatLng(lat, lng) {
    //     const latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    //     const geocoder = new google.maps.Geocoder();

    //     geocoder.geocode({'location': latlng}, function(results, status) {
    //         if (status === 'OK') {
    //             if (results[0]) {
    //                 this.props.changeFilter('area', results[0].formatted_address);
    //             } else {
    //                 this.props.createErrors('Address not found');
    //             }
    //         } else {
    //             window.alert('Geocoder failed due to: ' + status);
    //         }
    //     }.bind(this));
    // }

    componentDidMount(){
        // const map = this.refs.map;
        // this.map = new google.maps.Map(map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // if (this.props.singleListing) {
        // this.props.fetchBench(this.props.benchId);
        // } else {
        // this.registerListeners();
        // this.MarkerManager.updateMarkers(this.props.benches);
        // }

        this.map = new google.maps.Map(this.mapNode, mapOptions);    // this renders map
        this.MarkerManager = new MarkerManager(this.map, this.props.openModal);
        this.MarkerManager.updateMarkers(Object.values(this.props.listings))

    }

    componentDidUpdate() {
    //     if (this.props.singleListing) {
    //         const targetBenchKey = Object.keys(this.props.benches)[0];
    //         const targetBench = this.props.benches[targetBenchKey];
    //         this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
    //     } else {
    //         this.MarkerManager.updateMarkers(this.props.benches);
    //     }
    this.MarkerManager.updateMarkers(Object.values(this.props.listings))
    }

    render(){
        return(
            <div ref={ map => this.mapNode = map } id='map-container'>
            </div>
        )
    }
}
export default ListingMap;