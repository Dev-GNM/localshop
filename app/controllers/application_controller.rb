class ApplicationController < ActionController::API
  include ActionController::Cookies
  def index
    puts "Welcome"
  end

end
