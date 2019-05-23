require 'rails_helper'

RSpec.describe User, type: :model do
  feature "successfull creation of a new user" do
    let!(:newUser) { User.create(
      first_name: 'John',
      last_name: 'Appleseed',
      username: 'Johnny',
      email: 'john@example.com',
      password: 'password') }

    scenario 'successfull creation of a new user' do
      expect(newUser.first_name).to eq('John')
      expect(newUser.last_name).to eq('Appleseed')
      expect(newUser.username).to eq('Johnny')
      expect(newUser.email).to eq('john@example.com')
      expect(newUser.password).to eq('password')
      expect(newUser.role).to eq('member')
    end
  end

  feature "unsuccessfull creation of a new user" do
    let!(:newUser) { User.create() }

    scenario 'unsuccessfull creation of a new user' do
      expect(newUser.errors.full_messages).to include("Username can't be blank")
      expect(newUser.errors.full_messages).to include("Email can't be blank")
      expect(newUser.errors.full_messages).to include("Password can't be blank")
    end
  end

  feature "initializing a user with a non-default role changes it" do
    let!(:newUser) { User.create(
      first_name: 'John',
      last_name: 'Appleseed',
      username: 'Johnny',
      email: 'john@example.com',
      password: 'password',
      role: 'admin') }

    scenario "user's role is successfully changed to admin" do
      expect(newUser.first_name).to eq('John')
      expect(newUser.last_name).to eq('Appleseed')
      expect(newUser.username).to eq('Johnny')
      expect(newUser.email).to eq('john@example.com')
      expect(newUser.password).to eq('password')
      expect(newUser.role).to eq('admin')
    end
  end
end
