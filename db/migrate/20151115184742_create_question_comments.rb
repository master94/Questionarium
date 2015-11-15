class CreateQuestionComments < ActiveRecord::Migration
  def change
    create_table :question_comments do |t|
      t.references :question

      t.timestamps
    end
  end
end
