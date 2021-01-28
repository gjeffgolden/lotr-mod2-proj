class AddColumnsToQuests < ActiveRecord::Migration[6.0]
  def change
    add_column :quests, :image, :string
    add_column :quests, :audio, :string
  end
end
