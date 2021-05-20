require 'rails_helper'

RSpec.describe OrderDestination, type: :model do
  before do
    @order_destination = FactoryBot.build(:order_destination)
  end

  it 'subject' do
    expect(@order_destination).to be_valid
  end
end
