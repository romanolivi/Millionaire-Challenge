class LeaderboardsController < ApplicationController

    def index 
        leaders = Leaderboard.all 
        render json: LeaderboardSerializer.new(leaders)
    end

    def show 
        leader = Leaderboard.find_by(params[:username])
        render json: LeaderboardSerializer.new(leader)
    end

    def create 
        leader = Leaderboard.create(:username => params[:username], :balance => params[:balance])
        render json: LeaderboardSerializer.new(leader)
    end

end
