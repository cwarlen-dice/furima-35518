FactoryBot.define do
  factory :item do
    name	{ Faker::Lorem.characters(number: 40) }
    info	{ Faker::Lorem.sentence }
    category_id	{ Faker::Number.within(range: 1..10) }
    sales_status_id	{ Faker::Number.within(range: 1..6) }
    shipping_fee_id	{ Faker::Number.within(range: 1..3) }
    prefecture_id	{ Faker::Number.within(range: 1..47) }
    scheduled_delivery_id	{ Faker::Number.within(range: 1..3) }
    price	{ Faker::Number.within(range: 300..9_999_999) }

    association :user

    after(:build) do |item|
      item.image.attach(io: File.open('public/images/1701.png'), filename: 'public/images/1701.png', content_type: 'image/png')
    end
  end
end
