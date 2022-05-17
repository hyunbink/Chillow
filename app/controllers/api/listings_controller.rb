class Api::ListingsController < ApplicationController
    private
    def listing_params
        params.require(:listing).permit(:street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id)
    end
end
