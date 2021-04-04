class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: UserSerializer.new(users) 
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user)
    end 

    def create 
        user = User.new(user_params)
        if user.save 
            render json: user, except: [:created_at, :updated_at]
        else 
            render json: { message: 'User Creation Failure'}
        end 
    end 


    private 

    def user_params 
        params.require(:user).permit(:username, :password)
    end

end
