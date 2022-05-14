class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        @current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless logged_in?
            render json: ["Unauthorized User"], status: 403
        end
    end

    def require_logged_out
        if logged_in?
            render json: ["Already Authorized -sign out to access-"], status: 403 #300 ??
        end
    end

end
