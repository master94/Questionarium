class CreateAnswerComments < ActiveRecord::Migration
  def change
    create_table :answer_comments do |t|
      t.references :answer

      t.timestamps
    end
  end
end
