class CreatingBostonRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :boston_restaurants do |t|
      t.string :businessname, null: false, :default => "Business name not provided"
      t.string :legalowner, :default => "Owner not listed"
      t.string :namelast, :default => "Owner's last name not listed"
      t.string :namefirst, :default => "Owner's last name not listed"
      t.string :licenseno, :default => "License number not given"
      t.string :licstatus, :default => "License status unknown"
      t.string :resultdttm, :default => "Inspection date not provided"
      t.string :viollevel, :default => "Violation level not provided"
      t.string :violdesc, :default => "Violation description not provided"
      t.string :violstatus, :default => "Inspection result not provided"
      t.string :statusdate, :default => "Inspection date not provided"
      t.text :comments, :default => "Inspector comments not provided"
      t.string :address, :default => "Address not provided"
      t.string :city, :default => "City not provided"
      t.string :state, :default => "State not provided"
      t.string :zip, :default => "Zip code not provided"
      t.string :location, :default => "Location not provided"
    end

    add_index :boston_restaurants, :businessname
  end
end
