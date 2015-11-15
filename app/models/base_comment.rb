class BaseComment < ActiveRecord::Base
  belongs_to :user
  has_one :question_comment
  has_one :answer_comment
end
