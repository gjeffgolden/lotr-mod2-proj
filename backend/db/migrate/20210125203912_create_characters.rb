class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :height
      t.string :race
      t.string :gender
      t.string :birth
      t.string :spouse
      t.string :death
      t.string :realm
      t.string :hair
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
