require 'rails_helper'

RSpec.describe Reply, type: :model do

  describe "reply is created successfully" do
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
      user: newUser) }

    let!(:reply) {Reply.create(
      body: 'I would highly recommend the Tuscan Kitchen as a great lunch spot,
      whether you will be taking out coworkers or grabbing a quick bite yourself',
      user: newUser,
      post: post) }

    it 'has a body' do
      expect(reply.body).to eq 'I would highly recommend the Tuscan Kitchen as a great lunch spot,
      whether you will be taking out coworkers or grabbing a quick bite yourself'
    end

    it "has a user associated with it" do
      expect(reply.user_id).to eq newUser.id
    end

    it "has a post associated with it" do
      expect(reply.post_id).to eq post.id
    end
  end

  describe "reply is NOT created successfully" do
    let!(:reply) { Reply.create() }
    it "shows validation errors for a 'blank' reply" do
      expect(reply.errors.full_messages).to include "Body can't be blank"
      expect(reply.errors.full_messages).to include "Body is too short (minimum is 50 characters)"
      expect(reply.errors.full_messages).to include "Post must exist"
      expect(reply.errors.full_messages).to include "User must exist"
      expect(reply.errors.full_messages.length).to eq 4
    end
  end
end
