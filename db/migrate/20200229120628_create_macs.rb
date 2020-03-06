class CreateMacs < ActiveRecord::Migration[5.2]
  def change
    create_table :macs do |t|
      t.integer :spec 
      t.integer :cpu
      t.integer :memory
      t.integer :storage
      t.timestamps
    end
  end
end
