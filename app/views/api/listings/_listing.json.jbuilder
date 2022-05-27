json.extract! listing, :id, :street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id
json.photoUrls listing.photos.map { |photo| url_for(photo) }  
