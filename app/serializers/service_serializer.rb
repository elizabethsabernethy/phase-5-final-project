class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :price, :category, :service_providers
  has_many :appointments
  has_many :stylists, through: :stylist_services
end
