class CreateHogs < ActiveRecord::Migration[5.1]
  def change
    create_table :hogs do |t|
      t.string :name
      t.string :specialty
      t.boolean :greased
      t.float :weight
      t.string :medal

      t.timestamps
    end
  end
end
