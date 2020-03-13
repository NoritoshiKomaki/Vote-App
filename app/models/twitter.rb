class Twitter < ApplicationRecord
  belongs_to :user
  has_many :users, through: :likes
  validates :name, uniqueness: true,
                    presence: true,
                    length: { maximum: 16 }
  
  def self.search(input, id)
    return nil if input == ""
    Twitter.where(['name LIKE ?', "%#{input}%"] ).where.not(id: id).limit(3)
  end

end
