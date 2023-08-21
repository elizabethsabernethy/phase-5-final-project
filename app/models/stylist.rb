class Stylist < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_many :stylist_services
    has_many :services, through: :stylist_services
end
