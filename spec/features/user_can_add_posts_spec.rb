require 'rails_helper'
require 'devise'

feature 'users can add new posts' do
  scenario 'user adds a new post successfully' do
    user = User.create(
      first_name: 'John',
      last_name: 'Appleseed',
      username: 'Johnny',
      email: 'john@example.com',
      password: 'password'
    )
    login_as(user, :scope => :user)

    visit new_post_path
    expect(page).to have_content 'Post Something!'

    fill_in 'Title:', with: 'A truly awful experience in the theater district!'
    fill_in 'Post:', with: 'I just had the worst dinner possible at the Theater
    Restaurant, before I went to see a show. Do NOT go here, or you will regret it!'

    click_button 'Create Post'
    expect(page).to have_content 'Your post has been added successfully!'
    expect(page).to have_content 'A truly awful experience in the theater district!'
  end

  scenario 'user does not provide proper information for a post' do
    visit new_post_path

    click_button 'Create Post'
    expect(page).to have_content "Title can't be blank"
    expect(page).to have_content "Title is too short (minimum is 10 characters)"
    expect(page).to have_content "Body can't be blank"
    expect(page).to have_content "Body is too short (minimum is 50 characters)"
  end
end
