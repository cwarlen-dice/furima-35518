class ItemsController < ApplicationController
  before_action :authenticate_user!, except: %i[index show]

  def index
    @items = Item.all.order(created_at: :DESC)
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to(root_path)
    else
      render :new
    end
  end

  def show
    one_item
  end

  def edit
    one_item
    check_user
  end

  def update
    one_item
    check_user
    if @item.update(item_params)
      redirect_to(item_path(params[:id]))
    else
      render :edit
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :info, :category_id, :sales_status_id, :shipping_fee_id, :prefecture_id,
                                 :scheduled_delivery_id, :price, :image).merge(user_id: current_user.id)
  end

  def one_item
    @item = Item.find(params[:id])
  end

  def check_user
    redirect_to(root_path) unless current_user.id == @item.user.id
  end
end
