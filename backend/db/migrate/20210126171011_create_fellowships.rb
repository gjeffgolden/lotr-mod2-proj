class CreateFellowships < ActiveRecord::Migration[6.0]
  def change
    create_table :fellowships do |t|
      t.string :name
      t.references :quest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
