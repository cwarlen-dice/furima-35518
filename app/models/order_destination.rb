class OrderDestination
  include ActiveModel::Model
  attr_accessor :user_id, :item_id, :postal_code, :prefecture_id, :city, :addresses, :building, :phone_number

  # validates :key
  def save
    order = Order.create(user_id: user_id, item_id: item_id)
    binding.pry
    Destination.create(postal_code: postal_code, prefecture_id: prefecture_id, city: city, addresses: addresses, building: building,
                       phone_number: phone_number, order_id: order.id)
  end
end
