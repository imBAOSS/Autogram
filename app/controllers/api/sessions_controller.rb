class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def delete
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["No one currently logged in"], status: 404
  end
end
