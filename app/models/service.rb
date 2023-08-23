class Service < ApplicationRecord
    has_many :appointments
    has_many :stylist_services
    has_many :stylists, through: :stylist_services

    def service_providers 
        self.stylists.pluck(:name).uniq
    end
end
