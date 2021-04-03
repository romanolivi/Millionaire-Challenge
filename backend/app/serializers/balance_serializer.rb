class BalanceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :user_id
  belongs_to :user
end
