class LeaderboardSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :balance
end
