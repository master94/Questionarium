class QuestionComment < ActiveRecord::Base
  belongs_to :base_comment
  belongs_to :question
end
