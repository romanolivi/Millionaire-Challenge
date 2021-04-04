Rails.application.routes.draw do
  resources :leaderboards
  resources :balances
  resources :users
  get '/test' => 'application#test'
end
