class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :caption, :text 
  has_many :answers, serializer: AnswerSerializer
  has_one :user, serializer: UserSerializer
end
