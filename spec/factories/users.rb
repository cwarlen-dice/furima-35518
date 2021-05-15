FactoryBot.define do
  factory :user do
    email	{ Faker::Internet.free_email }
    password	{ "a1#{Faker::Internet.password(min_length: 6)}" }
    password_confirmation { password }
    nickname	{ Faker::Name.name }
    first_name	{ Gimei.name.first.kanji }
    last_name	{ Gimei.name.last.kanji }
    first_name_kana	{ Gimei.name.first.katakana }
    last_name_kana	{ Gimei.name.last.katakana }
    birth_date	{ Faker::Date.birthday }
  end

  # password	{ '000000' }
  # password	{ Faker::Internet.password(min_length: 6) }
  # # 日本人名
  # Faker::Config.locale = :ja
  # # 英語人名
  # Faker::Config.locale = :en
  # # 中国人名
  # Faker::Config.locale = 'zh-CN'
end
