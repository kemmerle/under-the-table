class PostSeeder
  POST_DATA = [
    {title: "Looking for clean restaurants in Cambridge", body: "I recently had a bad experience dining at my favorite spot in Cambridge. Could anyone recommend me a spot near Central Square, where I could take a date? Any help would be much appreciated!", user: User.first},
    {title: "Looking for a professional lunch spot near Downtown Crossing", body: "I work right near Downtown Crossing, and I'm looking for a restaurant to which I could take some clients. I would prefer a clean and quiet spot.", user: User.second},
    {title: "A Korean food truck?", body: "I've recently moved from Providence, and I am missing Mama Kim's food truck so bad right now! Could anyone help me out and recommend a good, clean Korean option in Boston? Preferably a food truck!", user: User.last}
  ]

  def self.seed!
    POST_DATA.each do |post|
      body = post[:body]
      another = Post.find_or_initialize_by(body: body)
      another.assign_attributes(post)
      another.save!
    end
  end
end
