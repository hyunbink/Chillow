class Api::SavesController < ApplicationController

    def index
        @saves = Save.all.where(user_id: current_user.id)
        if @saves
            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end
    end

    def create
        @save = Save.new(save_params) #user_id: current_user.id, listing_id: params[:listing_id]
        # debugger
        if @save.save 
            # @saves = saved_listings

            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end
    end

    def destroy
        @save = Save.find_by(id: params[:id] )
        # debugger
        # @user = current_user

        if @save.destroy && @save.user_id == current_user.id
            @saves = saved_listings 
            render json: @save
        else
            render json: { message: 'Nothing to destroy' }
        end
    end



    private
    def save_params
        params.require(:save).permit(:user_id, :listing_id)
    end
    
end
