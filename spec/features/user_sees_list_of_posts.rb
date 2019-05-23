require 'rails_helper'

feature "visitor sees a list of posts and links to show pages" do
  scenario "sees a list of posts" do
    user = User.create(
      first_name: 'John',
      last_name: 'Appleseed',
      username: 'Johnny',
      email: 'john@example.com',
      password: 'password'
    )
    post = Post.create(
      title: 'Any recommendations for a restaurant in the Seaport area?',
      body: 'I have recently started work in the Seaport,
      and I am desperate for a good lunch place where I can grab something quick.
      Any recs?',
      user: user
    )

    visit posts_path

    expect(page).to have_content "Any recommendations for a restaurant in the Seaport area?"
    expect(page).to have_link "Any recommendations for a restaurant in the Seaport area?"
  end
end
