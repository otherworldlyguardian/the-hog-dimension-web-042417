class Api::V1::AuthController < ApplicationController
  # before_action

  def show
    render json: {
      id: current_user.id,
      username: current_user.username
    }
  end

  def create
    user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      render json: {
        username: user.username,
        jwt: issue_token({id => user.id})
      }
      # if they do, render back a json response of the user info
      # issue the token

    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 401
    end
  end
end
