class ApplicationController < ActionController::API
  private

  def issue_token payload

  end

  def authorize_user!
  end

  def current_user
  end

  def token_user_id
  end

  def decoded_token
  end

  def token
    request.headers['Authorization']
  end

  def secret
    "gottareallylovehogs"
  end

  def algorithm
    "HS256"
  end
end
