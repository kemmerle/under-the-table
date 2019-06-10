require 'rails_helper'
require 'devise'

feature 'users can add new replies to a post' do
  scenario 'user adds a new reply successfully' do
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
    login_as(user, :scope => :user)

    visit new_post_reply_path(post.id)
    expect(page).to have_content 'Write a reply!'

    fill_in 'Reply:', with: 'Life Alive is a great place for a date, if you love vegan/vegetarian food and a fresh, young vibe! Would definitely recommend!'

    click_button 'Submit your reply!'
    expect(page).to have_content 'Life Alive is a great place for a date, if you love vegan/vegetarian food and a fresh, young vibe! Would definitely recommend!'
  end

  scenario 'user does not provide proper information for a reply' do
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
    login_as(user, :scope => :user)
    visit new_post_reply_path(post.id)

    click_button 'Submit your reply!'
    expect(page).to have_content "Body can't be blank"
    expect(page).to have_content "Body is too short (minimum is 50 characters)"
  end
end
