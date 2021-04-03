class BalancesController < ApplicationController

    def index 
        balances = Balance.all 
        render json: BalanceSerializer.new(balances)
    end

    def show 
        balance = Balance.find(params[:id])
        render json: BalanceSerializer.new(balance)
    end
    
end
