class LeaderboardsController < ApplicationController

    def create 
        user = User.find_by(username: params[:username])

        if user 
            session[:user_id] = user.id 
            render json: UserSerializer.new(user)
        else 
            render json: { message: "User Doesn't Exist"}
        end
    end

    def destroy 
        if session[:user_id]
            session.delete(:user_id)
        end
    end

end
