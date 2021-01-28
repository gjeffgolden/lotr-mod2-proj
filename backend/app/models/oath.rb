class Oath < ApplicationRecord
  belongs_to :character
  belongs_to :fellowship
  has_many :quests, through: :fellowship
end
