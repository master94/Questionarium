class AnswerComment < ActiveRecord::Base
  belongs_to :base_comment
  belongs_to :answer
end
