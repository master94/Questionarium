class Question < ActiveRecord::Base
  belongs_to :user, foreign_key: 'author_id'
  has_many :answers
  has_many :question_comments
end
