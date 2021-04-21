class CreateLeaderboards < ActiveRecord::Migration[6.1]
  def change
    create_table :leaderboards do |t|
      t.string :username
      t.integer :balance

      t.timestamps
    end
  end
end
