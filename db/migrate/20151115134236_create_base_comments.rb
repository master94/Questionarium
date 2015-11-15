class CreateBaseComments < ActiveRecord::Migration
  def change
    create_table :base_comments do |t|
      t.references :author
      t.text :text

      t.timestamps
    end
  end
end
