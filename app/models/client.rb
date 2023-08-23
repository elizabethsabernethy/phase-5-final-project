class Client < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :stylists, through: :appointments
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password_digest, presence: true
end
