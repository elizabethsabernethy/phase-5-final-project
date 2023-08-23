class StylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title
  # has_many :appointments
  has_many :services, through: :stylist_services
end
