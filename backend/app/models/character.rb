class Character < ApplicationRecord
    has_many :oaths
    has_many :fellowships, through: :oaths
    has_many :quests, through: :oaths
end
