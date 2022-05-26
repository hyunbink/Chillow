json.user do
    json.extract! user, :email, :id
    json.userSaves user.saved_listing_ids    # gives just an arr of id's
end


json.saves do
    user.saves.each do |save|
        json.set! save.id do
            json.extract! save, :user_id, :listing_id
        end
    end
end

json.listings do
    user.saved_listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :id, :street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id
            json.photoUrls listing.photos.map { |photo| url_for(photo) }  
        end
    end
end
