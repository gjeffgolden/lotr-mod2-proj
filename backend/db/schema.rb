# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_28_233601) do

  create_table "characters", force: :cascade do |t|
    t.string "height"
    t.string "race"
    t.string "gender"
    t.string "birth"
    t.string "spouse"
    t.string "death"
    t.string "realm"
    t.string "hair"
    t.string "name"
    t.string "link"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fellowships", force: :cascade do |t|
    t.string "name"
    t.integer "quest_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["quest_id"], name: "index_fellowships_on_quest_id"
  end

  create_table "oaths", force: :cascade do |t|
    t.integer "character_id", null: false
    t.integer "fellowship_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_oaths_on_character_id"
    t.index ["fellowship_id"], name: "index_oaths_on_fellowship_id"
  end

  create_table "quests", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.string "audio"
    t.string "video"
  end

  add_foreign_key "fellowships", "quests"
  add_foreign_key "oaths", "characters"
  add_foreign_key "oaths", "fellowships"
end
