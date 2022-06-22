import React from "react";
import MarkerManager from "../../util/marker_manager";

class ListingMap extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidUpdate() {
        let allListingsArr = Object.values(this.props.listings)
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
        this.map = new google.maps.Map(this.mapNode, this.mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.props.openModal, this.props.saves);
        this.MarkerManager.updateMarkers(Object.values(this.props.listings));
        Object.values(this.props.listings).forEach((list) => {
            document.getElementById(`index-listing-item-${list.id}`)
                .addEventListener("mouseover", ()=>{
                    setTimeout(
                    () => that.map.panTo({lat: list.latitude, lng: list.longitude}),
                    200
                    );
                })
        })
    }

    render(){
        return(
            <div ref={ map => this.mapNode = map } id='map-container'>
            </div>
        )
    }
}
export default ListingMap;