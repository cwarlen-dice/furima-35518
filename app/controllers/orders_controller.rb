class OrdersController < ApplicationController
  before_action :one_item_set, only: %i[index create]

  def index
    @order_destination = OrderDestination.new
  end

  def create
    @order_destination = OrderDestination.new(order_params)
    if @order_destination.valid?
      pay_item
      @order_destination.save
      redirect_to(item_path(params[:item_id]))
    else
      render :index
    end
  end

  private

  def order_params
    params.require(:order_destination).permit(:postal_code, :prefecture_id, :city, :addresses, :building,
                                              :phone_number).merge(user_id: current_user.id, item_id: params[:item_id], price: @item.price, card: params[:token])
  end

  def one_item_set
    @item = Item.find(params[:item_id])
  end

  def pay_item
    Payjp.api_key = ENV['PAYJP_SECRET_KEY'] # 環境設定
    Payjp::Charge.create(
      amount: order_params[:price], # 商品の値段
      card: order_params[:card],              # カードトークン
      currency: 'jpy'                         # 通貨の種類（日本円）
    )
  end
end
