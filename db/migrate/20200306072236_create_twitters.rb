class CreateTwitters < ActiveRecord::Migration[5.2]
  def change
    create_table :twitters do |t|
      t.string :twitter_name
      t.timestamps
    end
  end
end
