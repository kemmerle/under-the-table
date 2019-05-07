# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'boston_restaurants_data.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = BostonRestaurant.new
  t.businessname = row['businessname']
  t.legalowner = row['legalowner']
  t.namelast = row['namelast']
  t.namefirst = row['namefirst']
  t.licenseno = row['licenseno']
  t.licstatus = row['licstatus']
  t.resultdttm = row['resultdttm']
  t.viollevel = row['viollevel']
  t.violdesc = row['violdesc']
  t.violstatus = row['violstatus']
  t.statusdate = row['statusdate']
  t.comments = row['comments']
  t.address = row['address']
  t.city = row['city']
  t.state = row['state']
  t.zip = row['zip']
  t.location = row['location']
  t.save
end

puts "There are now #{BostonRestaurant.count} rows in the database"
