class CreateCambridgeRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :cambridge_restaurants do |t|
      t.string :address, null: false, :default => "Address not provided"
      t.string :establishment_name, null: false, :default => "Establishment name not given"
      t.text :code_description, :default => "Code description not provided"
      t.string :date_cited, :default => "Citation date not provided"
      t.string :date_corrected, :default => "Correction date not provided"
      t.string :status, :default => "Status unknown"
    end
  end
end
