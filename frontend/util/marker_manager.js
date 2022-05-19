class MarkerManager {
    constructor(map, history){
        this.map = map;
        this.history = history;
        this.markers = {};
    }

    updateMarkers(listings){
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);

        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing));

        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]));
    }

    createMarkerFromListing(listing) {
        const position = new google.maps.LatLng(listing.lat, listing.lng);

        const contentListingInfo = `<div style="display: flex; justify-content: space-between;">
        <div>
            <img src="${listing.photoUrls[0]}" style= 'width: 70px; height:70px; padding-right:15px;'></img>
        </div>
        <div className = "infoWindow-right">
            <h3> $ ${listing.price}</h3>
            <h2> ${listing.beds} bd ${listing.baths} ba  ${listing.sqft} sqft</h2>
        </div>
        </div>`;

        const listingInfoWindow = new google.maps.InfoWindow({
            content: contentListingInfo,
            disableAutoPan: true
        });

        const onClick = () => {
            this.history.push(`listings/${listing.id}`)
        };

        const mouseOver = () => {
            marker.infoWindow.open(this.map, marker);
            marker.setIcon(window.bluePin);
        };

        const mouseOut = () => {
            marker.infoWindow.close(this.map, marker);
            marker.setIcon(window.redPin);
        };

        const marker = new google.maps.Marker({
        position,
        map: this.map,
        infoWindow: listingInfoWindow,
        listingId: listing.id,
        icon: window.redPin
        });

        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        marker.addListener("click", onClick);
        this.markers[marker.listingId] = marker;
    };

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}

export default MarkerManager;
