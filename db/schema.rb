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

ActiveRecord::Schema.define(version: 2019_05_07_181218) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boston_restaurants", force: :cascade do |t|
    t.string "businessname", default: "Business name not provided", null: false
    t.string "legalowner", default: "Owner not listed", null: false
    t.string "namelast", default: "Owner's last name not listed", null: false
    t.string "namefirst", default: "Owner's last name not listed", null: false
    t.string "licenseno", default: "License number not given", null: false
    t.string "licstatus", default: "License status unknown", null: false
    t.string "resultdttm", default: "Inspection date not provided", null: false
    t.string "viollevel", default: "Violation level not provided", null: false
    t.string "violdesc", default: "Violation description not provided", null: false
    t.string "violstatus", default: "Inspection result not provided", null: false
    t.string "statusdate", default: "Inspection date not provided", null: false
    t.text "comments", default: "Inspector comments not provided", null: false
    t.string "address", default: "Address not provided", null: false
    t.string "city", default: "City not provided", null: false
    t.string "state", default: "State not provided", null: false
    t.string "zip", default: "Zip code not provided", null: false
    t.string "location", default: "Location not provided", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
