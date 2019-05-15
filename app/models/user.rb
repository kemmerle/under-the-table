class User < ApplicationRecord
  validates :username, presence: true
  validates :email, presence: true

  has_many :posts
  has_many :replies 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def admin?
    role == "admin"
  end
end
