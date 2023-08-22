class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :price, :category, :stylist_id
end
