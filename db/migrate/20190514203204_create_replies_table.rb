class CreateRepliesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.text :body, null: false
      t.belongs_to :user, null: false
      t.belongs_to :post, null: false

      t.timestamps null: false
    end
  end
end
