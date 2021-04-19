class User < ApplicationRecord
    has_many :balances
    validates :username, presence: true
end
