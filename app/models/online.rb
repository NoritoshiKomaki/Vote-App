class Online < ApplicationRecord
  belongs_to :user
  has_many :users, through: :like2s
end
