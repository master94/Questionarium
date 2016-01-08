class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :caption, :text, :created_at
  has_many :answers, serializer: AnswerSerializer
  has_one :user, serializer: UserSerializer
end
