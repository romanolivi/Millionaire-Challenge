class BalancesController < ApplicationController

    def index 
        balances = Balance.all 
        render json: BalanceSerializer.new(balances)
    end

    def show 
        balance = Balance.find(params[:id])
        render json: BalanceSerializer.new(balance)
    end

    def create 
        balance = Balance.create(:amount => params[:amount], :user_id => params[:user_id])
        options = {
            include: [:user]
        }
        render json: BalanceSerializer.new(balance, options)
    end
    
end
