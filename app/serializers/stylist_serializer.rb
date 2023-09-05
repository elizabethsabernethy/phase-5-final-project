class StylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title, :provider_services
  has_many :appointments
  has_many :services, through: :stylist_services
end
