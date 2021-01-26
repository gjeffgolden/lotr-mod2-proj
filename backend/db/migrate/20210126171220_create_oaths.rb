class CreateOaths < ActiveRecord::Migration[6.0]
  def change
    create_table :oaths do |t|
      t.references :character, null: false, foreign_key: true
      t.references :fellowship, null: false, foreign_key: true

      t.timestamps
    end
  end
end
