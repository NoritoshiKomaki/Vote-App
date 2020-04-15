class Twitter < ApplicationRecord
  belongs_to :user
  has_many :users, through: :likes
  
  
  def self.search(input, id)
    return nil if input == ""
    Twitter.where(['name LIKE ?', "%#{input}%"] ).where.not(id: id).limit(3)
  end

end
