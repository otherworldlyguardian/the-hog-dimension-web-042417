class Api::V1::HogsController < ApplicationController
  # before_action

  def show
    render json: {}
  end

  def create
    render json: {
      error: 'You wot m8?'
    }, status: 401
  end

end
