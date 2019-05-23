require 'rails_helper'

RSpec.describe Post, type: :model do
  let!(:newUser) { User.create(
    first_name: 'John',
    last_name: 'Appleseed',
    username: 'Johnny',
    email: 'john@example.com',
    password: 'password') }

  let!(:post) { Post.create(
    title: 'Any recommendations for a restaurant in the Seaport area?',
    body: 'I have recently started work in the Seaport,
    and I am desperate for a good lunch place where I can grab something quick.
    Any recs?',
    user: newUser
    )}

  describe "Validations" do

    it "is valid with valid attributes" do
      expect(post).to be_valid
    end

    it "is not valid without a title" do
      post.title = nil
      expect(post).to_not be_valid
    end

    it "is not valid without a body" do
      post.body = nil
      expect(post).to_not be_valid
    end

    it "is not valid without a user_id" do
      post.user_id = nil
      expect(post).to_not be_valid
    end
  end
end
