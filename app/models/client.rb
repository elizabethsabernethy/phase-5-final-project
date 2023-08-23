class Client < ApplicationRecord
    has_many :appointments
    has_many :stylists, through: :appointments
end
