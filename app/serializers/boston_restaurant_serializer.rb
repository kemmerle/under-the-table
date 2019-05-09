class BostonRestaurantSerializer < ActiveModel::Serializer
  attributes :id,
      :businessname,     
      :resultdttm,
      :viollevel,
      :violstatus,
      :violdesc,
      :statusdate,
      :comments,
      :address,
      :city,
      :state,
      :zip
end
