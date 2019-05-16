class CambridgeRestaurantSerializer < ActiveModel::Serializer
  attributes :id,
    :establishment_name,
    :address,
    :code_description,
    :date_cited,
    :date_corrected,
    :status
end
