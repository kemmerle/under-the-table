class BostonRestaurantShowSerializer < ActiveModel::Serializer
  attributes :businessname,
    :resultdttm,
    :viollevel,
    :violstatus,
    :violdesc,
    :statusdate,
    :comments,
    :address,
    :city,
    :state,
    :zip,
    :id 
end
