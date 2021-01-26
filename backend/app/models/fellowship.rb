class Fellowship < ApplicationRecord
    has_many :oaths
    has_many :characters, through: :oaths
    belongs_to :quest
end
