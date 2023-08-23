class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :price, :category
  has_many :stylists, through: :stylist_services
end
