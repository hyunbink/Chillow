class Api::SavesController < ApplicationController
    def create
        @save = Save.new(user_id: current_user.id, listing_id: params[:id])
        debugger
        if @save.save! 
            @saves = saved_listings
            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end
    end

    def destroy
        @save = Save.find_by(user_id: current_user.id, listing_id: params[:id])
        @user = current_user

        if @save.destroy
            @saves = saved_listings 
            # render '/api/users/_user'
        else
            render json: { message: 'No destroy' }
        end
    end

    private
    def save_params
        params.require(:save).permit(:user_id, :listing_id)
    end
    
end
