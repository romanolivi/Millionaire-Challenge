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
        render json: UserSerializer.new(user, options)
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
