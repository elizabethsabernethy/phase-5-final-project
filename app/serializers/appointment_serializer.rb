class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :stylist_id, :client_id, :service_id, :date, :time
  belongs_to :stylist
  belongs_to :client
  belongs_to :service
end
