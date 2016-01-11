class Answer < ActiveRecord::Base
  belongs_to :user, foreign_key: 'author_id'
  belongs_to :question
  has_many :answer_comments
  validates :text, length: { in: 1..65535 }
end
