class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :password 
  has_many :balances
end
