class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.integer :stylist_id
      t.integer :client_id
      t.integer :service_id
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
