class Appointment < ApplicationRecord
    belongs_to :service
    belongs_to :stylist
    belongs_to :client

    validates :stylist_id, presence: true
    validates :client_id, presence: true
    validates :service_id, presence: true
    validates :date, presence: true
    validates :time, presence: true
end
