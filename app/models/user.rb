class User < ActiveRecord::Base

  has_many :answers
  has_many :questions
  has_many :base_comments
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
