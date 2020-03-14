class Online < ApplicationRecord
  belongs_to :user
  has_many :users, through: :like2s
  validates :name, uniqueness: true,
                    presence: true,
                    length: { maximum: 20 }
end
