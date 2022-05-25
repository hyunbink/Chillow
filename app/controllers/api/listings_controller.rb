class Api::ListingsController < ApplicationController
    
    def index 
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.owner_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update 
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.owner_id == current_user.id && @listing.update(listing_params) 
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id, photos: []  )
    end
end
