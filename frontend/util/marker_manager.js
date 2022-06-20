class MarkerManager {
    constructor(map, handleClick, saves){
        this.map = map;
        this.handleClick = handleClick;
        this.markers = [];
        this.icon = null;
        this.icon2 = null;
        this.saves = saves;
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
        
        
        let that = this
        if (this.saves.includes(listing.id)) {
            that.icon = {
                url: "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
            };

        } else {
            that.icon = {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            };
            that.icon2 = {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            };
        }
        
        const mouseOver = () => {
            this.icon2 = {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            };
            marker.infoWindow.open(that.map, marker);
            marker.setIcon(that.icon2);
        };
        
        const mouseOut = () => {
            let that = this
            if (this.saves.includes(listing.id)) {
                that.icon = {
                    url: "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
                };
            } else {
                that.icon = {
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                };
            }
            marker.infoWindow.close(that.map, marker);
            marker.setIcon(that.icon);
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

        this.icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        };
        this.icon2 = {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
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

    createMarkerFromShow(listing) {
        const position = new google.maps.LatLng(listing.latitude, listing.longitude);
        
        this.icon = {
            url: window.house,
            scaledSize: new google.maps.Size(60,60)
        };
        this.icon2 = {
            url: window.house2,
            scaledSize: new google.maps.Size(60,60)
        };

        const mouseOver = () => {
            marker.setIcon(this.icon2);
        };
        const mouseOut = () => {
            marker.setIcon(this.icon);
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
