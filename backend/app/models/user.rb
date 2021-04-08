class User < ApplicationRecord
    has_many :balances
    validates :username, presence: true
    validates :username, uniqueness: true
end
