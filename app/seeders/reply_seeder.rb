class ReplySeeder
  REPLY_DATA = [
    {body: "I'm a big fan of Life Alive, a really nice, trendy vegetarian/vegan restaurant. It's perfect for a romantic date!", post: Post.first, user: User.first},
    {body: "Democracy Brewing is a perfect spot for a lunch meeting. I've taken several clients, and they've all enjoyed the atmosphere!", post: Post.second, user: User.second},
    {body: "I also used to live in Providence, and I miss the food truck scene there so badly! Unfortunately, I'm of no help. Is there anyone out there with any knowledge of the Boston food truck scene?", post: Post.last, user: User.last}
  ]

  def self.seed!
    REPLY_DATA.each do |reply|
      body = reply[:body]
      another = Reply.find_or_initialize_by(body: body)
      another.assign_attributes(reply)
      another.save!
    end
  end
end
