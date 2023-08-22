class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.integer :duration
      t.integer :price
      t.string :category
      t.integer :stylist_id

      t.timestamps
    end
  end
end
