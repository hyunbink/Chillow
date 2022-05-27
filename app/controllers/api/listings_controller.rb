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

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing.owner_id == current_user.id
            if @listing.destroy
                @listings = Listing.all
                render :index
            else
                render json: @listing.errors.full_messages, status: 422
            end
        else
            render json: ['could not delete'], status: 422
        end
    end

    def search
        query = params[:query]
        @listings = Listing.where('street ILIKE ? OR city ILIKE ? ', "%#{query}%", "%#{query}%")   # will be array zip_code uses int, google how to do
        if @listings.length > 0
            render :index
        else
            render json: ["no results found for #{query}"], status: 404
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:street, :city, :zip_code, :state, :latitude, :longitude, :sqft, :beds, :baths, :price, :owner_id, photos: []  )
    end
end
