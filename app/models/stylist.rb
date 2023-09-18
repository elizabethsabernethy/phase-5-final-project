class Stylist < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_many :stylist_services
    has_many :services, through: :stylist_services

    validates :name, uniqueness: true

    def provider_services 
        self.services.pluck(:name).uniq
    end
end
