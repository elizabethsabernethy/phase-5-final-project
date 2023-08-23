class StylistServiceSerializer < ActiveModel::Serializer
  attributes :id, :stylist_id, :service_id
  belongs_to :stylist
  belongs_to :service
end
