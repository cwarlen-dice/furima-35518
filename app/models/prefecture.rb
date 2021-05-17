class Prefecture < ActiveHash::Base
  self.data = [
    { id: 0, data: '---' },
    { id: 1, data: '北海道' },
    { id: 2, data: '青森県' },
    { id: 3, data: '岩手県' },
    { id: 4, data: '宮城県' },
    { id: 5, data: '秋田県' },
    { id: 6, data: '山形県' },
    { id: 7, data: '福島県' },
    { id: 8, data: '茨城県' },
    { id: 9, data: '栃木県' },
    { id: 10, data: '群馬県' },
    { id: 11, data: '埼玉県' },
    { id: 12, data: '千葉県' },
    { id: 13, data: '東京都' },
    { id: 14, data: '神奈川県' },
    { id: 15, data: '新潟県' },
    { id: 16, data: '富山県' },
    { id: 17, data: '石川県' },
    { id: 18, data: '福井県' },
    { id: 19, data: '山梨県' },
    { id: 20, data: '長野県' },
    { id: 21, data: '岐阜県' },
    { id: 22, data: '静岡県' },
    { id: 23, data: '愛知県' },
    { id: 24, data: '三重県' },
    { id: 25, data: '滋賀県' },
    { id: 26, data: '京都府' },
    { id: 27, data: '大阪府' },
    { id: 28, data: '兵庫県' },
    { id: 29, data: '奈良県' },
    { id: 30, data: '和歌山県' },
    { id: 31, data: '鳥取県' },
    { id: 32, data: '島根県' },
    { id: 33, data: '岡山県' },
    { id: 34, data: '広島県' },
    { id: 35, data: '山口県' },
    { id: 36, data: '徳島県' },
    { id: 37, data: '香川県' },
    { id: 38, data: '愛媛県' },
    { id: 39, data: '高知県' },
    { id: 40, data: '福岡県' },
    { id: 41, data: '佐賀県' },
    { id: 42, data: '長崎県' },
    { id: 43, data: '熊本県' },
    { id: 44, data: '大分県' },
    { id: 45, data: '宮崎県' },
    { id: 46, data: '鹿児島県' },
    { id: 47, data: '沖縄県' }
  ]

  include ActiveHash::Associations
  has_many :items
end
