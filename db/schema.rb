# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_14_121220) do

  create_table "like2s", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "online_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["online_id"], name: "index_like2s_on_online_id"
    t.index ["user_id"], name: "index_like2s_on_user_id"
  end

  create_table "likes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "twitter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["twitter_id"], name: "index_likes_on_twitter_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "macs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "spec"
    t.integer "cpu"
    t.integer "memory"
    t.integer "storage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "onlines", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_onlines_on_user_id"
  end

  create_table "twitters", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_twitters_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "nickname"
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "like2s", "onlines"
  add_foreign_key "like2s", "users"
  add_foreign_key "likes", "twitters"
  add_foreign_key "likes", "users"
  add_foreign_key "onlines", "users"
  add_foreign_key "twitters", "users"
end
