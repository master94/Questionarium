class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :text, :user
  has_one :user, serializer: UserSerializer
end
