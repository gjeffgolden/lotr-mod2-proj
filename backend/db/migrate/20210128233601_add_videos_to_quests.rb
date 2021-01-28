class AddVideosToQuests < ActiveRecord::Migration[6.0]
  def change
    add_column :quests, :video, :string
  end
end
