class Api::PhotosController < ApplicationController
  def index
    if params[:id]
      @photos = Photo.where('user_id = ?', params[:id])
                     .order('created_at DESC')
    elsif params[:photo_id]
      @photos = Photo.where('photo_id < ?', params[:photo_id])
                     .order('created_at DESC')
    else
      @photos = Photo.all.order('created_at desc').limit(10)
    end

    render 'api/photos/index'
  end

  def show
    @photo = Photo.find_by_id(:id)
    render 'api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = params[:id]

    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def photo_params
    params.require(:photo).permit(:user_id, :photo_url, :description)
  end
end
