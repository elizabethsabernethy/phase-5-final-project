class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_many :appointments
end
