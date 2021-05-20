class OrderDestination
  include ActiveModel::Model
  attr_accessor :user_id, :item_id, :postal_code, :prefecture_id, :city, :addresses, :building, :phone_number, :price, :card

  with_options presence: true do
    validates :user_id
    validates :item_id
    validates :prefecture_id, numericality: { other_than: 0, message: "can't be blank" }
    validates :city
    validates :addresses
    with_options format: { allow_blank: true } do
      validates :postal_code, format: { with: /\A[0-9]{3}-[0-9]{4}\z/, message: 'is invalid. 7 digit including hyphen(-)' }
      validates :phone_number, format: { with: /\A\d{11}\z/, message: 'is invalid. 11 digit number without (-)' }
    end
    validates :price
    validates :card
  end

  def save
    order = Order.create(user_id: user_id, item_id: item_id)
    Destination.create(postal_code: postal_code, prefecture_id: prefecture_id, city: city, addresses: addresses, building: building,
                       phone_number: phone_number, order_id: order.id)
  end
end
