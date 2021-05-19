class ItemsController < ApplicationController
  before_action :authenticate_user!, except: %i[index show]
  before_action :set_one_item, only: %i[show edit update]

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
  end

  def edit
    check_user(@item)
  end

  def update
    check_user(@item)
    if @item.update(item_params)
      redirect_to(item_path(params[:id]))
    else
      render :edit
    end
  end

  def destroy
    item = Item.find(params[:id])
    check_user(item)
    redirect_to(root_path) if item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:name, :info, :category_id, :sales_status_id, :shipping_fee_id, :prefecture_id,
                                 :scheduled_delivery_id, :price, :image).merge(user_id: current_user.id)
  end

  def set_one_item
    @item = Item.find(params[:id])
  end

  def check_user(var)
    redirect_to(root_path) unless current_user.id == var.user.id
  end
end
