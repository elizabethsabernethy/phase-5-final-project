class CreateStylists < ActiveRecord::Migration[7.0]
  def change
    create_table :stylists do |t|
      t.string :name
      t.string :job_title

      t.timestamps
    end
  end
end
