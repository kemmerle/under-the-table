# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

if Rails.env.development? || Rails.env.production?
  if BostonRestaurant.all.size == 0
    csv_text_boston = File.read(Rails.root.join('lib', 'seeds', 'boston_restaurants_data.csv'))
    csv_one = CSV.parse(csv_text_boston, :headers => true, :encoding => 'ISO-8859-1')
    csv_one.each do |row|
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
  end
end

if Rails.env.development? || Rails.env.production?
  if CambridgeRestaurant.all.size == 0
    csv_text_cambridge = File.read(Rails.root.join('lib', 'seeds', 'cambridge_restaurants_data.csv'))
    csv_two = CSV.parse(csv_text_cambridge, :headers => true, :encoding => 'ISO-8859-1')
    csv_two.each do |row|
      t = CambridgeRestaurant.new
      t.address = row['Address']
      t.establishment_name = row['Establishment Name']
      t.code_description = row['Code Description']
      t.date_cited = row['Date Cited']
      t.date_corrected = row['Date Corrected']
      t.status = row['Status']
      t.save
    end
  end
end

if Rails.env.development? || Rails.env.production?
  AdminSeeder.seed!
end

if Rails.env.development? || Rails.env.production?
  PostSeeder.seed!
end

if Rails.env.development? || Rails.env.production?
  ReplySeeder.seed!
end

puts "There are now #{BostonRestaurant.count} rows in the Boston table,
#{CambridgeRestaurant.count} in the Cambridge table, #{User.count} users,
#{Post.count} posts, and #{Reply.count} replies."
