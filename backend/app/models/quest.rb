class Quest < ApplicationRecord
  has_many :fellowships
  has_many :oaths, through: :fellowships
  has_many :characters, through: :fellowships
end
