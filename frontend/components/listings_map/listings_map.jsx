import React from "react";
import { withRouter } from 'react-router-dom';
import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng=> ({
    lst: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };

class ListingMap extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleListing) {
        this.props.fetchBench(this.props.benchId);
        } else {
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    componentDidUpdate() {
        if (this.props.singleListing) {
            const targetBenchKey = Object.keys(this.props.benches)[0];
            const targetBench = this.props.benches[targetBenchKey];
            this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
        } else {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    render(){
        return(
            <div ref={ map => this.mapNode = map } id='map-container'>

            </div>
        )
    }
}
export default ListingMap;