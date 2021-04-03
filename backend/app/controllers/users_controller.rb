class UsersController < ApplicationController

    def index 
        users = User.all 
        options = {
            include: [:balances]
        }
        render json: UserSerializer.new(users, options) 
    end

    def show 
        user = User.find_by(id: params[:id])
        options = {
            include: [:balances]
        }
        render json: UserSerializer(user, options)
    end 

    def create 
        user = User.create(username: params[:username])
        render json: user 
    end 

end
