class AdminSeeder
  ADMIN_DATA = [
    {username: "MarkK", first_name: "Mark", last_name: "Kemmerle", email: "mark@mark.com", password: "MakeNoBugs!", role: "admin"},
    {username: "ToniL", first_name: "Toni", last_name: "Lopez", email: "toni@toni.com", password: "MakeNoBugs!", role: "admin"},
    {username: "AllisonKemmerle", first_name: "Allison", last_name: "Kemmerle", email: "allison.kemmerle@gmail.com", password: "MakeNoBugs!", role: "admin"},
    {username: "NewUser", first_name: "New", last_name: "User", email: "new.user@gmail.com", password: "MakeNoBugs!", role: "user"}
  ]

  def self.seed!
    ADMIN_DATA.each do |user|
      email = user[:email]
      admin = User.find_or_initialize_by(email: email)
      admin.assign_attributes(user)
      admin.save!
    end
  end
end
