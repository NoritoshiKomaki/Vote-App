class CreateLike2s < ActiveRecord::Migration[5.2]
  def change
    create_table :like2s do |t|
      t.references :user, foreign_key: true
      t.references :online, foreign_key: true
      t.timestamps
    end
  end
end
