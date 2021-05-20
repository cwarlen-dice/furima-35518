class OrdersController < ApplicationController
  def index
    @item = Item.find(params[:item_id])
    @order_destination = OrderDestination.new
  end

  def new
    # @order_destination = OrderDestination.new
  end

  def create
    @order_destination = OrderDestination.new(order_params)
    binding.pry
    if @order_destination.valid?
      @order_destination.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def order_params
    params.require(:order_destination).permit(:postal_code, :prefecture_id, :city, :addresses, :building,
                                              :phone_number).merge(user_id: current_user.id, item_id: params[:item_id])
  end
end
