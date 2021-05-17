class Item < ApplicationRecord
  has_one_attached :image
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :sales_status
  # belongs_to :SalesStatus
  belongs_to :shipping_fee
  belongs_to :prefecture
  belongs_to :scheduled_delivery

  with_options presence: true do
    validates :image
    validates :name
    validates :info
    with_options numericality: { other_than: 0 } do
      validates :category_id
      validates :sales_status_id
      validates :shipping_fee_id
      validates :prefecture_id
      validates :scheduled_delivery_id
    end
    validates :price, numericality: { only_integer: true, greater_than_or_equal_to: 300, less_than_or_equal_to: 9_999_999 }
  end
end
