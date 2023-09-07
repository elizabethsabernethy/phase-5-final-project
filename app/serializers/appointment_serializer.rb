class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :stylist_id, :client_id, :service_id, :time_format, :date_format, :form_time, :date
  belongs_to :stylist
  belongs_to :client
  belongs_to :service
end
