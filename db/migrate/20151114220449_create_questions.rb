class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :caption, :limit => 100
      t.text :text
      t.references :author, index: true

      t.timestamps
    end
  end
end
