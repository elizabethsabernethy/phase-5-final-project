class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest
  # has_many :appointments
end
