class Api::ListingsController < ApplicationController

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    private
    def listing_params
        params.require(:listing).permit(:street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id, photos: [])
    end
end
