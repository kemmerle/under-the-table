class CreatingBostonRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :boston_restaurants do |t|
      t.string :businessname, null: false, :default => "Business name not provided"
      t.string :legalowner, null: false, :default => "Owner not listed"
      t.string :namelast, null: false, :default => "Owner's last name not listed"
      t.string :namefirst, null: false, :default => "Owner's last name not listed"
      t.string :licenseno, null: false, :default => "License number not given"
      t.string :licstatus, null: false, :default => "License status unknown"
      t.string :resultdttm, null: false, :default => "Inspection date not provided"
      t.string :viollevel, null: false, :default => "Violation level not provided"
      t.string :violdesc, null: false, :default => "Violation description not provided"
      t.string :violstatus, null: false, :default => "Inspection result not provided"
      t.string :statusdate, null: false, :default => "Inspection date not provided"
      t.text :comments, null: false, :default => "Inspector comments not provided"
      t.string :address, null: false, :default => "Address not provided"
      t.string :city, null: false, :default => "City not provided"
      t.string :state, null: false, :default => "State not provided"
      t.string :zip, null: false, :default => "Zip code not provided"
      t.string :location, null: false, :default => "Location not provided"
    end
  end
end
