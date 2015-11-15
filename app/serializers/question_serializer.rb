class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :caption, :text, :user
end
