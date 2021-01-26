class Character < ApplicationRecord
    has_many :oaths
    has_many :fellowships, through: :oaths
end
