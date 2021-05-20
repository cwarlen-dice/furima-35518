FactoryBot.define do
  Faker::Config.locale = :ja

  factory :order_destination do
    user_id	{ Faker::Number.number }
    # item_id	{ Faker::Number }
    item_id	{ '1' }
    postal_code	{ Faker::Address.postcode }
    prefecture_id	{ Faker::Number.within(range: 1..47) }
    city	{ Faker::Address.city }
    addresses	{ Faker::Address.street_address }
    building	{ Faker::Address.building_number }
    # phone_number	{ Faker::PhoneNumber.phone_number }
    phone_number	{ Faker::Number.number(digits: 11) }
    price	{ Faker::Number.within(range: 300..9_999_999) }
    card	{ Faker::Number.number }
  end
end
