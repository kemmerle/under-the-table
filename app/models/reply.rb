class Reply < ApplicationRecord
  validates :body, presence: true, length: { minimum: 50 }

  belongs_to :post
  belongs_to :user 
end
