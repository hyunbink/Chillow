class MarkerManager {
    constructor(map, handleClick, icon){
        this.map = map;
        this.handleClick = handleClick;
        this.markers = [];
        this.icon = icon
        this.icon2 = icon

    }
    
    
    updateMarkers(listings){
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);
        
        listings
        // .filter(listing => !this.markers[listing.id])
        .forEach(newListing => this.createMarkerFromListing(newListing));
        
        // Object.keys(this.markers)
        //     .filter(listingId => !listingsObj[listingId])
        //     .forEach((listingId) => this.removeMarker(this.markers[listingId]));
        
    }
    
    createMarkerFromListing(listing) {
        this.clearMarkers();
        const position = new google.maps.LatLng(listing.latitude, listing.longitude);
        
        // for display hover window over marker
        const contentListingInfo = `<div style="display: flex; justify-content: space-between;">
        <div>
        <img src="${listing.photoUrls[0]}" style= 'width: 70px; height:70px; padding-right:15px;'></img>
        </div>
        <div className = "info-Window" >
        <h3 style='font-size: 14px; font-family: Roboto, Arial; font-weight: 500; color:#333' > $${listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}</h3>
        <h2 style='font-family: Roboto, Arial; font-size: 13px; color:#333;' > ${listing.beds} bd ${listing.baths} ba  ${listing.sqft} sqft</h2>
        </div>
        </div>`;
        const listingInfoWindow = new google.maps.InfoWindow({
            content: contentListingInfo,
            disableAutoPan: true
        });
        
        const onClick = (listing) => {
            // eventually change the location to instead render modal
            // location.href = `#/listings/${marker.listingId}`
            this.props.openModal('show',  listing.id)    // get this to render modal
        };
        
        const mouseOver = () => {
            marker.infoWindow.open(this.map, marker);
            marker.setIcon(this.icon2);
        };
        
        const mouseOut = () => {
            marker.infoWindow.close(this.map, marker);
            marker.setIcon(this.icon);
        };
        
        if (this.icon !== 'house') {
            this.icon = {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                // scaledSize: new google.maps.Size(60,60)
            };
            this.icon2 = {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
        } else {
            this.icon = {
                url: window.house,
                scaledSize: new google.maps.Size(60,60)
            };
            this.icon2 = {
                url: window.house2,
                scaledSize: new google.maps.Size(60,60)
            }
            };
        
        
        
        
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            infoWindow: listingInfoWindow,
            listingId: listing.id,
            icon: this.icon
        });

        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        marker.addListener("click", ()=>(this.handleClick('show',listing.id)));
        // this.markers[marker.listingId] = marker;
    };

    createMarkerFromForm(lat, lng) {
        this.clearMarkers();
        const position = new google.maps.LatLng(lat, lng);
        const mouseOver = () => {
            marker.setIcon(this.icon2);
        };
        const mouseOut = () => {
            marker.setIcon(this.icon);
        };
        if (this.icon !== 'house') {
            this.icon = {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                // scaledSize: new google.maps.Size(60,60)
            };
            this.icon2 = {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
        } else {
            this.icon = {
                url: window.house,
                scaledSize: new google.maps.Size(60,60)
            };
            this.icon2 = {
                url: window.house2,
                scaledSize: new google.maps.Size(60,60)
            }
            };
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon: this.icon
        });
        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        this.markers.push(marker);
    };

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }

    clearMarkers(){
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
    }
}

export default MarkerManager;
