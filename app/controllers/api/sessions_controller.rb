class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render '/api/users/show'
        else
            render json: ["Invalid Credentials"], status: 422
        end
    end

    def destroy
        @user = User.find_by(session_token: session[:session_token])
        if @user 
            logout!
            render json: ['Logout Successful']
        else
            render json: ["Invalid Command"], status: 404
        end
    end
end
